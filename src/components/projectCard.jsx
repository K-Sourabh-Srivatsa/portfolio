import React from "react";

const ProjectCard = ({ image, title, description, techStack, checkoutPath }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col h-full hover:border-white/30 transition-all group">
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
      <p className="text-white/60 text-sm sm:text-base mb-8 flex-grow break-words">
        {description}
      </p>

      <p className="text-white/60 text-sm sm:text-base mb-4 break-words">
        <span className="font-semibold text-white/90">Tech Stack:</span> {techStack}
      </p>

      <button
        aria-label={`Check out ${checkoutPath}`}
        onClick={() => window.open(checkoutPath, "_blank")}
        className="w-full bg-purple-500/80 hover:bg-purple-500 py-2 sm:py-3 rounded-2xl font-medium transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
      >
        Check Out
      </button>
    </div>
  );
};

export default ProjectCard;
