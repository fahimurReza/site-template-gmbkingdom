import HeroSection from "../components/HeroSection";
import PageContent from "../components/PageContent";
import WhyProperty from "../components/WhyProperty";
import Capabilities from "../components/Capabilities";
import Includes from "../components/Includes";
import ProjectScenarios from "../components/ProjectScenarios";
import FAQSection from "../components/FAQSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <PageContent />
      <WhyProperty />
      <Capabilities />
      <Includes />
      <ProjectScenarios />
      <FAQSection />
    </div>
  );
};

export default page;
