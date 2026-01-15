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
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h3>
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
