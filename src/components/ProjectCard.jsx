function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="project-card"
      onClick={() => onOpen(project)}
    >
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <div className="project-overlay">
          <button className="overlay-btn">
            View Details
          </button>
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.category}</p>

        <span
          className={
            project.status === "Completed"
              ? "project-status completed"
              : "project-status ongoing"
          }
        >
          {project.status}
        </span>

        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;