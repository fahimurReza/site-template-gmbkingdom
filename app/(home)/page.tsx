import Hero from "./components/hero-section/Hero";
import ServiceSection from "./components/service-section/ServiceSection";
import Methodology from "./components/methodology/Methodology";

const home = () => {
  return (
    <main>
      <Hero />
      <ServiceSection />
      <Methodology />
    </main>
  );
};

export default home;
