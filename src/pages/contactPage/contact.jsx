const Contact = () => {
  return (
    <>
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-3xl font-bold mb-6 ml-4">Contact Details</h2>
            <div class="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 mb-8 relative overflow-hidden flex flex-col h-full">
              <div class="space-y-6 flex-grow">
                <div class="flex items-start gap-4">
                  <div class="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold">Personal Email:</p>
                    <p class="opacity-90">k_sourabh_srivatsa@gmail.com</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold">Work Email:</p>
                    <p class="opacity-90">sourabh_srivatsa@epam.com</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold">
                      Phone:{" "}
                      <span class="font-normal opacity-90">+91 897877266</span>
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold">
                      Location:{" "}
                      <span class="font-normal opacity-90">
                        Hyderabad, India
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-8 flex justify-center">
                <button class="bg-[#a855f7] hover:bg-[#9333ea] transition-colors text-white font-bold py-3 px-12 rounded-full text-lg">
                  Check Out
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold mb-6 ml-4">My Profiles</h2>
            <div class="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 mb-8 relative overflow-hidden flex flex-col h-full">
              <div class="space-y-6 flex-grow">
                <div class="flex items-start gap-4">
                  <div class="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 opacity-70"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div class="break-all">
                    <p class="font-bold">Linkedin:</p>
                    <a href="#" class="opacity-90 hover:underline">
                      https://wobh_srivatsa@epam.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 opacity-70"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div class="break-all">
                    <p class="font-bold">Github</p>
                    <a href="#" class="opacity-90 hover:underline">
                      https://www.linkedin/odn/h-sourabh-srivata k-10063283
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 opacity-70"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-11.71 11.593a1.384 1.384 0 0 0 0 1.981l1.198 1.19a1.387 1.387 0 0 0 1.983 0l11.71-11.593a1.384 1.384 0 0 0 0-1.981L14.506.414A1.374 1.374 0 0 0 13.483 0zM6.53 14.544l1.198 1.19a1.387 1.387 0 0 0 1.983 0l11.71-11.593a1.384 1.384 0 0 0 0-1.981L20.224.414a1.374 1.374 0 0 0-1.962 0l-11.71 11.593a1.384 1.384 0 0 0 0 1.981l.019.019zM3.33 24h17.34c1.33 0 2.33-1.002 2.33-2.33V12.667h-2.667v9h-17v-17h9V2h-9C3.001 2 2 3.002 2 4.334V21.67C2 23.001 3.001 24 3.331 24z" />
                    </svg>
                  </div>
                  <div class="break-all">
                    <p class="font-bold">LeetCode</p>
                    <a href="#" class="opacity-90 hover:underline">
                      https://glecede/u/Sourabh_Srivasta
                    </a>
                  </div>
                </div>
              </div>

              <div class="mt-8 flex justify-center">
                <button class="bg-[#a855f7] hover:bg-[#9333ea] transition-colors text-white font-bold py-3 px-12 rounded-full text-lg">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
