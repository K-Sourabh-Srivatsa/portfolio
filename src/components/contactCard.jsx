import contactData from "../pages/contactPage/contact.json";

const ContactCard = () => {
  const { contactCard } = contactData;
  return (
    <>
      <div className="container">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Contact Details</h1>
        <section className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <ul className="list-none pl-0 space-y-4 text-white/90 break-words">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {/* Added flex-1 and min-w-0 to allow shrinking */}
                <div className="flex-1 min-w-0">
                  <span className="font-bold">Personal Email: </span>
                  <span>
                    <a
                      href={`mailto:${contactCard.personalEmail}`}
                      className="my-0 inline-block max-w-full break-all opacity-90 hover:underline"
                    >
                      {contactCard.personalEmail}
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
                    d="M8 7V6a4 4 0 018 0v1M3 7h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                  />
                </svg>
                <div className="flex-1 min-w-0">
                  <span className="font-bold">Work Email:</span>
                  <span>
                    <a
                      href={`mailto:${contactCard.workEmail}`}
                      className="inline-block max-w-full break-all opacity-90 hover:underline"
                    >
                      {contactCard.workEmail}
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="flex-1 min-w-0">
                  <span className="font-bold">Phone: </span>
                  <span>
                    <a
                      href={`tel:${contactCard.phone}`}
                      className="inline-block max-w-full break-all opacity-90"
                    >
                      {contactCard.phone}
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="flex-1 min-w-0">
                  <span className="font-bold">Location: </span>
                  <span className="opacity-90 break-words">
                    {contactCard.location}
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

export default ContactCard;
