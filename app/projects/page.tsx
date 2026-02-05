import AllProjectsSection from "./components/AllProjectsSection";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Models from "./components/Models";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Models />
      <FeatureSection />
      <AllProjectsSection />
    </div>
  );
};

export default page;
