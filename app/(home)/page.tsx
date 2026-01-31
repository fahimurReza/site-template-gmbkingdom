import Hero from "./components/hero-section/Hero";
import ServiceSection from "./components/service-section/ServiceSection";
import Methodology from "./components/methodology/Methodology";
import ReadyTo from "./components/ready-to/ReadyTo";

const home = () => {
  return (
    <main>
      <Hero />
      <ServiceSection />
      <Methodology />
      <ReadyTo />
    </main>
  );
};

export default home;
