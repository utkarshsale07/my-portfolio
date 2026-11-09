import ThreeScene from './ThreeScene.jsx'
import { PROFILE } from '../data.js'

export default function Hero() {
  return (
    <>
      <header className="hero">
        <ThreeScene />
        <svg className="blob" viewBox="0 0 200 200" aria-hidden="true">
          <path fill="#ff7a3d" d="M43 -52c14 12 24 31 24 50s-10 38-25 50-35 17-52 8-31-29-33-49 11-40 28-52 43-19 58-7z" transform="translate(100 100)" />
        </svg>
        <div className="wrap">
          <span className="sticker">Open to entry-level roles</span>
          <h1>Utkarsh Sale</h1>
          <p className="lead">Java full stack developer from Maharashtra. I build web apps with Spring Boot, React and ASP.NET Core, and I like finding the story inside a dataset.</p>
          <div className="btns">
            <a className="btn p" href="#projects">See my work</a>
            <a className="btn" href={`mailto:${PROFILE.email}`}>Email me</a>
            <a className="btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </header>
      <svg className="wave" viewBox="0 0 1200 46" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 46V20C150 0 300 40 450 24S750 0 900 22s200 18 300 0v24z" fill="var(--bg)" />
      </svg>
    </>
  )
}
