import React from "react";
import homeData from "./home.json";

const Homepage = () => {
  const { myName, myTitle, myBio, projects } = homeData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white p-8 md:p-16">
      {/* Navigation Bar */}
      <nav className="flex justify-center mb-12">
        <div className="flex bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <button
              key={item}
              className={`px-6 py-2 rounded-lg transition-all ${
                item === "Home"
                  ? "bg-purple-500 shadow-lg"
                  : "hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 mb-16 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-2">
            Hi, my name is {myName} 👋
          </h1>
          <h2 className="text-5xl font-bold mb-6 text-white/90">
            I am a {myTitle.split("@")[0]}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
            {myBio}
          </p>
          <button className="bg-purple-500 hover:bg-purple-400 px-8 py-3 rounded-2xl font-semibold transition-all shadow-lg">
            Check Out
          </button>
        </div>
        {/* Decorative Light Refraction */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 ml-4">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.projectIndex}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col h-full hover:border-white/30 transition-all group"
            >
              {/* Mock Project Image/Icon */}
              <div className="bg-purple-950/40 rounded-2xl h-48 mb-6 overflow-hidden border border-white/5">
                <div className="w-full h-full bg-gradient-to-t from-purple-500/20 to-transparent group-hover:scale-110 transition-transform duration-500"></div>
              </div>

              <h4 className="text-xl font-bold mb-3">{project.projectTitle}</h4>
              <p className="text-white/60 text-sm mb-8 flex-grow">
                {project.projectDescription}
              </p>

              <button className="w-full bg-purple-500/80 hover:bg-purple-500 py-3 rounded-2xl font-medium transition-all">
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
