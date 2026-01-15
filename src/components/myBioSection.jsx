import MyBioData from "../pages/aboutPage/about.json";

const MyBioSection = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">About Me</h1>
        <section className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <ul className="list-none pl-0 space-y-4 text-white break-words">
              <li className="flex items-start gap-3">
                <div className="shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-white/90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 21a6.5 6.5 0 00-13 0"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="leading-relaxed">
                    {MyBioData.myBio}
                  </span>
                </div>
              </li>

              <li className="border-t border-purple-500/100 pt-4">
                <div className="space-y-3">
                  {Array.isArray(MyBioData.myDegree) ? (
                    MyBioData.myDegree.map((deg, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="shrink-0 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white/90"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 14l6.16-3.422A12.083 12.083 0 0121 18.5a12.083 12.083 0 01-2.84 6.922L12 22"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="leading-relaxed text-white">{deg}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-white/90"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 14l6.16-3.422A12.083 12.083 0 0121 18.5a12.083 12.083 0 01-2.84 6.922L12 22"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="leading-relaxed">
                          {MyBioData.myDegree}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyBioSection;
