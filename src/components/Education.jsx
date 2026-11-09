import Heading from './Heading.jsx'
import { EDUCATION } from '../data.js'

export default function Education() {
  return (
    <section id="education" aria-labelledby="t-edu">
      <div className="wrap">
        <Heading id="t-edu" color="#ff7a3d">Education</Heading>
        <ol className="tl" style={{ marginTop: 24 }}>
          {EDUCATION.map((e) => (
            <li key={e.year}>
              <time>{e.year}</time>
              <span>{e.title}<small>{e.place}</small></span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
