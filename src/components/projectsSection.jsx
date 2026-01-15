import { Link } from "react-router-dom";
import homeData from "../pages/homePage/home.json";
import ProjectCard from "./projectCard";

const ProjectsSection = () => {
  const { projects } = homeData;
  const projectImages = import.meta.glob("../images/*", { eager: true });

  const getImagePath = (path) => {
    const imageModule = projectImages[path];
    return imageModule ? imageModule.default : null;
  };

  return (
    <>
      <section className="w-full">
        <Link to="/projects" className="inline-block group mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold transition-all duration-300 group-hover:text-purple-400 flex items-center gap-2">
            Projects
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </h3>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.projectIndex}
              image={getImagePath(project.projectImage)}
              title={project.projectTitle}
              description={project.projectDescription}
              techStack={project.projectTechStack}
              checkoutPath={project.projectCheckoutPath}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
