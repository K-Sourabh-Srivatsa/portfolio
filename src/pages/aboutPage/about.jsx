import MyBioSection from "../../components/myBioSection";
import MyExp from "../../components/myExp";
import MySkills from "../../components/skillsSection";

const About = () => {
  return (
    <>
      <div className="mt-6 py-4">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 items-start">
          {/* Left pane myBio, myDegree */}
          <div className="w-auto lg:w-[50%]">
            <MyBioSection />
            <MySkills />
          </div>
          <div className="w-auto lg:flex-1">
            <MyExp />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
