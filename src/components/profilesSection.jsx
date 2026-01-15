import contactData from "../pages/contactPage/contact.json";

const ProfilesSection = () => {
  return (
    <>
      <div className="container h-full flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Follow my Profiles
        </h1>
        <section className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 mb-8 relative overflow-hidden flex-grow flex flex-col">
          <div className="relative z-10 flex-grow flex flex-col">
            <ul className="list-none pl-0 gap-4 text-white/90 break-words flex-grow flex flex-col justify-between">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h6 w-6 text-white/70 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                {/* FIX: Added flex-1 and min-w-0 */}
                <div className="flex-1 min-w-0">
                  <span className="font-bold">LinkedIn: </span>
                  <span>
                    <a
                      href={contactData.profilesCard.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      /* FIX: changed break-words to break-all */
                      className="my-0 inline-block max-w-full break-all opacity-90 hover:underline"
                    >
                      {contactData.profilesCard.linkedIn}
                    </a>
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h6 w-6 text-white/70 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <div className="flex-1 min-w-0">
                  <span className="font-bold">GitHub: </span>
                  <span>
                    <a
                      href={contactData.profilesCard.github}
                      target="_blank"
                      rel="noreferrer"
                      className="my-0 inline-block max-w-full break-all opacity-90 hover:underline"
                    >
                      {contactData.profilesCard.github}
                    </a>
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h6 w-6 text-white/70 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-11.71 11.593a1.384 1.384 0 0 0 0 1.981l1.198 1.19a1.387 1.387 0 0 0 1.983 0l11.71-11.593a1.384 1.384 0 0 0 0-1.981L14.506.414A1.374 1.374 0 0 0 13.483 0zM6.53 14.544l1.198 1.19a1.387 1.387 0 0 0 1.983 0l11.71-11.593a1.384 1.384 0 0 0 0-1.981L20.224.414a1.374 1.374 0 0 0-1.962 0l-11.71 11.593a1.384 1.384 0 0 0 0 1.981l.019.019zM3.33 24h17.34c1.33 0 2.33-1.002 2.33-2.33V12.667h-2.667v9h-17v-17h9V2h-9C3.001 2 2 3.002 2 4.334V21.67C2 23.001 3.001 24 3.331 24z" />
                </svg>
                <div className="flex-1 min-w-0">
                  <span className="font-bold">LeetCode: </span>
                  <span>
                    <a
                      href={contactData.profilesCard.leetcode}
                      target="_blank"
                      rel="noreferrer"
                      className="my-0 inline-block max-w-full break-all opacity-90 hover:underline"
                    >
                      {contactData.profilesCard.leetcode}
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden sm:block absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>
        </section>
      </div>
    </>
  );
};

export default ProfilesSection;
