import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section
  className="projects"
  id="projects"
  data-aos="zoom-in"
>
      <div className="projects-container">
        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="projects-subtitle">
          A collection of mobile, web, and full stack
          projects showcasing my development journey.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={handleOpenProject}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={handleCloseProject}
        />
      </div>
    </section>
  );
}

export default Projects;