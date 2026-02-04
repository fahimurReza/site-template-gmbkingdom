import HeroSection from "./components/HeroSection";
import Models from "./components/Models";
import OurStory from "./components/OurStory";
import OurTeam from "./components/OurTeam";
import OurValues from "./components/OurValues";
import WhyChoseUs from "./components/WhyChoseUs";
import Credentials from "./components/Credentials";
import SafetyFirst from "./components/SafetyFirst";
import ReadyToWork from "./components/ReadyToWork";

const About = () => {
  return (
    <div>
      <HeroSection />
      <Models />
      <OurStory />
      <OurValues />
      <WhyChoseUs />
      <OurTeam />
      <Credentials />
      <SafetyFirst />
      <ReadyToWork />
    </div>
  );
};

export default About;
