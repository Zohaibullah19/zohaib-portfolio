function Skills() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
      ]
    },

    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Express.js",
        "Django"
      ]
    },

    {
      category: "Database",
      technologies: [
        "MongoDB",
        "MySQL"
      ]
    },

    {
      category: "Mobile",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase"
      ]
    },

    {
      category: "Tools",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman"
      ]
    }
  ];

  return (
    <section
  className="skills"
  id="skills"
  data-aos="fade-right"
>
      <div className="skills-container">
        <h2 className="section-title">
          Skills
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use to
          build modern web and mobile
          applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
            >
              <h3>{skill.category}</h3>

              <div className="skill-tags">
                {skill.technologies.map(
                  (tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;