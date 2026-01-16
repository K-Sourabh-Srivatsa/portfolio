import React from "react";
import projectsData from "./projects.json";
import ProjectCard from "../../components/projectCard";

const Projects = () => {
  const { projects } = projectsData;
  const projectImages = import.meta.glob("../../data/images/*", { eager: true });

  const getImagePath = (path) => {
    const imageModule = projectImages[path];
    return imageModule ? imageModule.default : null;
  };

  return (
    <div className="container mt-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project.propertyIndex} className="h-full">
            <ProjectCard
              image={getImagePath(project.projectImage)}
              title={project.projectTitle}
              description={project.projectDescription}
              techStack={project.projectTechStack}
              checkoutPath={project.projectCheckoutPath}
              githubPath={project.projectGithubPath}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
