import homeData from "../pages/homePage/home.json";
import { saveAs } from "file-saver";
import resume from "../images/K Sourabh Srivatsa.pdf";


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
          <h4 className="text-xl mb-4 font-bold text-yellow-200">@{myCompany}</h4>
          <p className="text-base sm:text-lg text-white leading-relaxed mb-8">
            {myBio}
          </p>
          {/* Add the Resume Download here */}
          <div className="about-resume">
            <p className="text-white mb-4">Check out my Resume below!</p>
            <button
              className="bg-purple-500 hover:bg-purple-400 px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-bold transition-all shadow-lg text-sm sm:text-base cursor-pointer"
              onClick={() => saveAs(resume, "K Sourabh Srivatsa.pdf")}
            >
              Download Resume
            </button>
          </div>
        </div>
        {/* Decorative Light Refraction */}
        <div className="hidden sm:block absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>
      </section>
    </>
  );
};

export default HeroSection;
