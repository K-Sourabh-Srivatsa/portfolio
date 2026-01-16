import React from "react";

const ProjectCard = ({ image, title, description, techStack, checkoutPath, githubPath }) => {
  return (
    <div 
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col h-full hover:bg-white/10 hover:border-white/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] transition-all duration-500 group cursor-pointer"
      onClick={() => window.open(checkoutPath, "_blank")}
    >
      {/* Project Image */}
      <div className="bg-purple-950/40 rounded-2xl h-40 md:h-48 mb-6 overflow-hidden border border-white/5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <h4 className="text-lg sm:text-xl font-bold mb-3 break-words">
        {title}
      </h4>
      <p className="text-white text-sm sm:text-base mb-6 flex-grow break-words">
        {description}
      </p>

      {/* Visual Separation */}
      <div className="h-px w-full bg-white/10 mb-6" />

      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
        <p className="text-white text-sm sm:text-base break-words">
          <span className="font-semibold text-white/90 mr-2">Tech Stack:</span>
          {techStack}
        </p>
      </div>

      <div className="flex gap-3 w-full">
        <button
          aria-label={`View Project ${title}`}
          onClick={(e) => {
            e.stopPropagation();
            window.open(checkoutPath, "_blank");
          }}
          className="flex-1 bg-purple-500/80 hover:bg-purple-500 py-2 sm:py-3 rounded-2xl font-bold transition-all text-base focus:outline-none focus:ring-2 focus:ring-purple-300 text-white-300 flex items-center justify-center"
        >
          View Project
        </button>
        <button
          aria-label={`GitHub Repository for ${title}`}
          onClick={(e) => {
            e.stopPropagation();
            window.open(githubPath || checkoutPath, "_blank");
          }}
          className="bg-purple-500/80 hover:bg-purple-500 px-4 py-2 sm:py-3 rounded-2xl font-bold transition-all text-base focus:outline-none focus:ring-2 focus:ring-purple-300 text-white-300 flex items-center justify-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
