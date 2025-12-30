import contactData from "./contact.json";

const Contact = () => {
  const { contactCard, profilesCard } = contactData;
  return (
    <div className="mt-6 py-4">
      {/* Hero Section */}
      <div className="container">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Contact Details
        </h1>
        <section className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <ul className="list-disc pl-6 space-y-4 text-white/90 break-words">
              <li>
                <span className="font-bold">Personal Email: </span>
                <span>
                  <a
                    href={`mailto:${contactCard.personalEmail}`}
                    className="ml-2 my-0 inline-block max-w-full break-all opacity-90 hover:underline"
                  >
                    {contactCard.personalEmail}
                  </a>
                </span>
              </li>
              <li>
                <span className="font-bold">Work Email:</span>
                <span>
                  <a
                    href={`mailto:${contactCard.workEmail}`}
                    className="inline-block max-w-full break-all opacity-90 hover:underline"
                  >
                    {contactCard.workEmail}
                  </a>
                </span>
              </li>
              <li>
                <span className="font-bold">Phone:</span>
                <span>
                  <a
                    href={`tel:${contactCard.phone}`}
                    className="ml-2 inline-block max-w-full break-all opacity-90"
                  >
                    {contactCard.phone}
                  </a>
                </span>
              </li>
              <li>
                <span className="font-bold">Location:</span>
                <span className="ml-2 opacity-90">{contactCard.location}</span>
              </li>
            </ul>
          </div>
          {/* Decorative Light Refraction */}
          <div className="hidden sm:block absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>
        </section>
      </div>

      {/* Profiles Section */}
      <div className="container">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Follow my Profiles
        </h1>
        <section className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <ul className="list-disc pl-6 space-y-4 text-white/90 break-words">
              <li>
                <span className="font-bold">LinkedIn:</span>
                <span>
                  <a
                    href={profilesCard.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block max-w-full break-all opacity-90 hover:underline"
                  >
                    {profilesCard.linkedIn}
                  </a>
                </span>
              </li>
              <li>
                <span className="font-bold">GitHub:</span>
                <span>
                  <a
                    href={profilesCard.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block max-w-full break-all opacity-90 hover:underline"
                  >
                    {profilesCard.github}
                  </a>
                </span>
              </li>
              <li>
                <span className="font-bold">LeetCode:</span>
                <span>
                  <a
                    href={profilesCard.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block max-w-full break-all opacity-90 hover:underline"
                  >
                    {profilesCard.leetcode}
                  </a>
                </span>
              </li>
            </ul>
          </div>
          {/* Decorative Light Refraction */}
          <div className="hidden sm:block absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
