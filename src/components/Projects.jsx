import { useState } from 'react'
import Heading from './Heading.jsx'
import { PROJECTS } from '../data.js'

const CATEGORIES = ['All', ...new Set(PROJECTS.map((p) => p.category))]

export default function Projects() {
  const [active, setActive] = useState('All')

  return (
    <section id="projects" aria-labelledby="t-proj">
      <div className="wrap">
        <Heading id="t-proj" color="#5ee3d0">Projects</Heading>
        <p className="sub">Each one links to its source code on GitHub.</p>
        <div className="filters" role="group" aria-label="Filter projects">
          {CATEGORIES.map((c) => (
            <button key={c} aria-pressed={active === c} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="grid">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className={`card${p.featured ? ' feat' : ''}`}
              hidden={active !== 'All' && p.category !== active}
            >
              <h3>{p.title}</h3>
              <div className="chips">{p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
              {p.bullets ? <ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul> : <p>{p.text}</p>}
              <a className="go" href={p.link} target="_blank" rel="noopener noreferrer">{p.linkLabel}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
