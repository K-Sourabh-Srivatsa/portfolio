import homeData from "../pages/homePage/home.json";

const HeroSection = () => {
  const { myName, myTitle, myCompany, myBio } = homeData;
  return (
    <>
      <section className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Hi, my name is <span className="text-green-100">{myName}</span> 👋
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 text-white/90">
            I am a <span className="font-bold text-red-100">{myTitle}</span>
          </h2>
          <h4 className="mb-4 font-bold text-yellow-200">@{myCompany}</h4>
          <p className="text-base sm:text-lg text-white leading-relaxed">
            {myBio}
          </p>
          {/* Add the Resume Download here */}
          {/* <button
            aria-label="Check out hero"
            className="bg-purple-500 hover:bg-purple-400 px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-semibold transition-all shadow-lg text-sm sm:text-base"
          >
            Check Out
          </button> */}
          {/* add mb-8 into the above p tag when you implement the resume download button */}
        </div>
        {/* Decorative Light Refraction */}
        <div className="hidden sm:block absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>
      </section>
    </>
  );
};

export default HeroSection;
