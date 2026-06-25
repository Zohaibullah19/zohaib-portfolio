function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isMobileVideo =
    project.title === "LinguaMaster";

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>{project.title}</h2>

        <p className="modal-description">
          {project.description}
        </p>

        <div className="modal-tech">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="modal-buttons">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="github-btn"
  >
    GitHub Repository
  </a>

  {project.demo !== "#" && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      className="demo-btn"
    >
      Live Demo
    </a>
  )}
</div>

        {project.video ? (
          <video
            controls
            className={`project-video ${
              isMobileVideo ? "mobile-video" : ""
            }`}
          >
            <source
              src={project.video}
              type="video/mp4"
            />
            Your browser does not support video playback.
          </video>
        ) : (
          <div className="coming-soon">
            🚀 Demo Coming Soon
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;