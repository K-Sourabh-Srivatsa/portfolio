import homeData from "../pages/homePage/home.json";

const ProjectsSection = () => {
  const { projects } = homeData;
  return (
    <>
      <section className="w-full">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.projectIndex}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col h-full hover:border-white/30 transition-all group"
            >
              {/* Mock Project Image/Icon */}
              <div className="bg-purple-950/40 rounded-2xl h-40 md:h-48 mb-6 overflow-hidden border border-white/5">
                <div className="w-full h-full bg-gradient-to-t from-purple-500/20 to-transparent group-hover:scale-110 transition-transform duration-500"></div>
              </div>

              <h4 className="text-lg sm:text-xl font-bold mb-3 break-words">
                {project.projectTitle}
              </h4>
              <p className="text-white/60 text-sm sm:text-base mb-8 flex-grow break-words">
                {project.projectDescription}
              </p>

              <p className="text-white/60 text-sm sm:text-base mb-4 break-words">
                <span className="font-semibold text-white/90">Tech Stack:</span> {project.projectTechStack}
              </p>

              <button
                aria-label={`Check out ${project.projectCheckoutPath}`}
                onClick={() => window.open(project.projectCheckoutPath, "_blank")}
                className="w-full bg-purple-500/80 hover:bg-purple-500 py-2 sm:py-3 rounded-2xl font-medium transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                Check Out
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
