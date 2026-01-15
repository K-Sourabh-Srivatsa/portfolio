import MyBioData from "../pages/aboutPage/about.json";

const MyExp = () => {
  return (
    <div className="container">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">My Experience</h1>
      <section className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <ul className="list-none pl-0 space-y-8 text-white break-words">
            {MyBioData.myExperience.map((exp, index) => (
              <li
                key={index}
                className={
                  index !== 0 ? "border-t border-purple-500/100 pt-8" : ""
                }
              >
                <div className="space-y-4">
                  {/* Company Header */}
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h2 className="text-xl font-bold text-white">
                        {exp.myCompanyRole}
                        <span className="text-purple-300 mx-2">@</span>
                        {exp.myCompanyName}
                      </h2>
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full w-fit">
                        {exp.myCompanyDuration}
                      </span>
                    </div>
                    {exp.myCompanyClients && (
                      <p className="text-white">
                        <span className="font-semibold text-purple-200">
                          Client:
                        </span>{" "}
                        {exp.myCompanyClients}
                      </p>
                    )}
                  </div>

                  {/* Work Items */}
                  <div className="space-y-3">
                    {exp.myWork.map((work, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="shrink-0 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-purple-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm leading-relaxed text-gray-200">
                            {work}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  {exp.myAchievements && exp.myAchievements.length > 0 && (
                    <div className="mt-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                      <h3 className="text-sm font-bold text-purple-200 mb-2 flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                        Key Achievements
                      </h3>
                      <ul className="space-y-3 mt-3">
                        {exp.myAchievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="shrink-0 mt-0.5">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="w-5 h-5 text-yellow-500" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                              >
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-300 leading-relaxed">
                              {ach}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MyExp;
