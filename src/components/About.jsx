import Heading from './Heading.jsx'

export default function About() {
  return (
    <section id="about" aria-labelledby="t-about">
      <div className="wrap about">
        <div>
          <Heading id="t-about" color="#ff7a3d">About me</Heading>
          <p>I am a Computer Engineering graduate who recently finished the Post Graduate Certificate in Advanced Computing (PGCP-AC) at C-DAC. During the course I built full-stack apps in both the Java and .NET worlds.</p>
          <p>My favourite part is the backend: designing REST APIs, locking them down with Spring Security and JWT, and giving each kind of user (customer, provider, admin) only the access they need. I also work with Python, SQL and Power BI when a project needs analysis rather than a web app.</p>
          <p>I am looking for an entry-level Java Developer, Full Stack Developer or .NET Developer role where I can ship reliable, secure software and keep learning.</p>
        </div>
        <div className="stats">
          <div className="stat"><b>PGCP-AC, C-DAC</b><span>Advanced Computing, 2026</span></div>
          <div className="stat"><b>B.E. Computer Engineering</b><span>University of Pune, 2025</span></div>
          <div className="stat"><b>9 projects on GitHub</b><span>Web, data, AI and mobile</span></div>
        </div>
      </div>
    </section>
  )
}
