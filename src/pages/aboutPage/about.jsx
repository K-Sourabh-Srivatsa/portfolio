import MyBioSection from "../../components/myBioSection";

const About = () => {
  return (
    <>
      <div className="mt-6 py-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-start">
          {/* Left pane myBio, myDegree */}
          <div className="lg:flex-none">
            <MyBioSection />
          </div>
          <div className="lg:flex-1">
            <MyBioSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
