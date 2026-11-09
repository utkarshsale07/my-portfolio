import { PROFILE } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="t-contact">
      <div className="wrap">
        <div className="contact">
          <h2 id="t-contact">Hire a Java full stack developer</h2>
          <p>If your team has an entry-level Java, Full Stack or .NET opening, I would love to hear about it.</p>
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <a href={`tel:${PROFILE.phone}`}>{PROFILE.phoneLabel}</a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">github.com/utkarshsale07</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn: Utkarsh Sale</a>
        </div>
      </div>
    </section>
  )
}
