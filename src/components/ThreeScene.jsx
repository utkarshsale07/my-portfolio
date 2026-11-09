import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true })
    } catch {
      cv.style.display = 'none'
      return
    }

    const scene = new THREE.Scene()
    const cam = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    scene.fog = new THREE.Fog(0x0b2b26, 12, 30)
    scene.add(new THREE.AmbientLight(0xffffff, 0.6))
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 9, 6)
    scene.add(light)

    const N = 13, sp = 0.95
    const world = new THREE.Group()
    scene.add(world)

    // grid of cubes that rise and fall like a wave
    const inst = new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.72, 1, 0.72),
      new THREE.MeshStandardMaterial({ roughness: 0.45, flatShading: true }),
      N * N
    )
    const A = new THREE.Color(0x5ee3d0), B = new THREE.Color(0xd4f05a)
    const color = new THREE.Color(), dummy = new THREE.Object3D()
    for (let i = 0; i < N; i++) {
      for (let k = 0; k < N; k++) {
        const q = Math.hypot(i - N / 2 + 0.5, k - N / 2 + 0.5) / (N * 0.7)
        color.copy(A).lerp(B, Math.min(q, 1))
        inst.setColorAt(i * N + k, color)
      }
    }
    inst.instanceColor.needsUpdate = true
    world.add(inst)

    // glowing grid floor
    const grid = new THREE.GridHelper(N * sp + 8, N + 8, 0x5ee3d0, 0x1f5d55)
    grid.position.y = -1.5
    world.add(grid)

    // floating cube
    const cube = new THREE.Group()
    cube.position.y = 4
    cube.add(new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(2.8, 2.8, 2.8)), new THREE.LineBasicMaterial({ color: 0xff7a3d })))
    cube.add(new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), new THREE.MeshStandardMaterial({ color: 0xff7a3d, roughness: 0.4, flatShading: true })))
    cube.add(new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.5, 1.5, 1.5)), new THREE.LineBasicMaterial({ color: 0xd4f05a })))
    world.add(cube)

    const resize = () => {
      const w = cv.clientWidth, h = cv.clientHeight
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(w, h, false)
      cam.aspect = w / h
      cam.updateProjectionMatrix()
      const mob = w < 700
      cam.position.set(mob ? 9 : 10, mob ? 10 : 8.5, mob ? 12 : 11)
      cam.lookAt(mob ? 0 : -1, 1, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let mx = 0, my = 0, px = 0, pz = 0
    const onMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5
      my = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('pointermove', onMove)

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let t = 0, raf
    const tick = () => {
      t += 0.014
      px += (mx * N * 0.9 - px) * 0.06
      pz += (my * N * 0.9 - pz) * 0.06
      for (let i = 0; i < N; i++) {
        for (let k = 0; k < N; k++) {
          const x = (i - N / 2 + 0.5) * sp, z = (k - N / 2 + 0.5) * sp
          const wave = Math.sin(Math.hypot(x, z) * 0.8 - t * 2.2) * 0.5 + 0.5
          const boost = Math.max(0, 2.2 - Math.hypot(x - px, z - pz) * 0.5)
          const hgt = 0.35 + wave * 1.1 + boost
          dummy.position.set(x, hgt / 2 - 1.5, z)
          dummy.scale.set(1, hgt, 1)
          dummy.updateMatrix()
          inst.setMatrixAt(i * N + k, dummy.matrix)
        }
      }
      inst.instanceMatrix.needsUpdate = true
      cube.rotation.y = t * 0.8
      cube.rotation.x = t * 0.45
      cube.position.y = 4 + Math.sin(t * 1.6) * 0.3
      world.rotation.y = Math.sin(t * 0.25) * 0.25
      renderer.render(scene, cam)
      if (!still) raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      scene.traverse((o) => {
        o.geometry?.dispose()
        o.material?.dispose?.()
      })
      renderer.dispose()
    }
  }, [])

  return <canvas id="gl" ref={ref} aria-hidden="true" />
}
