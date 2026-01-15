import MyBioData from "../pages/aboutPage/about.json";

const MySkills = () => {
  // Mapping categories to icons and specific colors
  const categoryConfig = {
    "Frontend Development": {
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    "Backend Development": {
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    "Database Management": {
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    "Cloud Infrastructure (AWS)": {
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    "Monitoring & Analytics": {
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      borderColor: "border-pink-400/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    "Customer Engagement & CMS": {
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  };

  // Fallback config if category name doesn't match
  const defaultConfig = {
    color: "text-gray-300",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  };

  return (
    <div className="container mt-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Technical Skills</h1>
      <section className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 mb-8 relative overflow-hidden">
        {/* Table Header - Only visible on medium screens and up */}
        <div className="hidden md:grid md:grid-cols-12 gap-2 pb-4 border-b border-white/10 text-white/60 font-semibold uppercase text-xs tracking-wider">
          <div className="col-span-4 pl-4">Category</div>
          <div className="col-span-8">Technologies</div>
        </div>

        <div className="space-y-4 md:space-y-0 text-white">
          {MyBioData.mySkills.map((skill, index) => {
            const config = categoryConfig[skill.category] || defaultConfig;
            
            return (
              <div 
                key={index} 
                className={`
                  flex flex-col md:grid md:grid-cols-12 md:gap-4 
                  p-4 rounded-xl transition-all duration-300
                  hover:bg-white/5 
                  ${index !== MyBioData.mySkills.length - 1 ? "md:border-b md:border-white/5" : ""}
                `}
              >
                {/* Category Column */}
                <div className="col-span-4 flex items-center gap-3 mb-3 md:mb-0">
                  <div className={`p-2 rounded-lg ${config.bgColor} ${config.color} border ${config.borderColor} shrink-0`}>
                    {config.icon}
                  </div>
                  <h3 className="font-bold text-lg md:text-base leading-tight">
                    {skill.category}
                  </h3>
                </div>

                {/* Technologies Column */}
                <div className="col-span-8 flex items-center">
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.split(',').map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-white/5 rounded-full text-white border border-white/10 transition-colors cursor-default"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MySkills;
