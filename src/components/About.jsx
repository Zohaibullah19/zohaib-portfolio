function About() {
  return (
    <section
      className="about"
      id="about"
      data-aos="fade-up"
    >
      <div className="about-container">
        <h2 className="section-title">
          About Me
        </h2>

        <p className="about-text">
          I am Zohaib Wazir, a Software Engineering student at City University
          Peshawar and a passionate Full Stack & Flutter Developer. I enjoy
          building modern web and mobile applications that solve real-world
          problems.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>4+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="about-card">
            <h3>2</h3>
            <p>Internships Completed</p>
          </div>

          <div className="about-card">
            <h3>Full Stack</h3>
            <p>Web & Mobile Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;