import Heading from './Heading.jsx'
import { SKILLS } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="t-skills">
      <div className="wrap">
        <Heading id="t-skills" color="#d4f05a">Skills</Heading>
        <div className="skills" style={{ marginTop: 24 }}>
          {SKILLS.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <div className="chips">{g.items.map((i) => <span className="chip" key={i}>{i}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
