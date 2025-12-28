import React from "react";
import homeData from "./home.json";

const Homepage = () => {
  const { myName, myTitle, myCompany, myBio, projects } = homeData;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 mb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Hi, my name is <span className="text-green-100">{myName}</span> 👋
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 text-white/90">
            I am a <span className="font-bold text-red-100">{myTitle}</span>
          </h2>
          <h4 className="mb-4 font-bold text-yellow-200">@{myCompany}</h4>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
            {myBio}
          </p>
          <button
            aria-label="Check out hero"
            className="bg-purple-500 hover:bg-purple-400 px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-semibold transition-all shadow-lg text-sm sm:text-base"
          >
            Check Out
          </button>
        </div>
        {/* Decorative Light Refraction */}
        <div className="hidden sm:block absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8">Projects</h3>
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

              <button
                aria-label={`Check out ${project.projectTitle}`}
                className="w-full bg-purple-500/80 hover:bg-purple-500 py-2 sm:py-3 rounded-2xl font-medium transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                Check Out
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
