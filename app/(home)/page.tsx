import Hero from "./components/hero-section/Hero";
import ServiceSection from "./components/service-section/ServiceSection";
import Methodology from "./components/methodology/Methodology";
import ReadyTo from "./components/ready-to/ReadyTo";
import PriceGuide from "./components/price-guide/PriceGuide";

const home = () => {
  return (
    <main>
      <Hero />
      <ServiceSection />
      <Methodology />
      <ReadyTo />
      <PriceGuide />
    </main>
  );
};

export default home;
