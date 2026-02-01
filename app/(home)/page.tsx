import Hero from "./components/hero-section/Hero";
import ServiceSection from "./components/service-section/ServiceSection";
import Methodology from "./components/methodology/Methodology";
import ReadyTo from "./components/ready-to/ReadyTo";
import PriceGuide from "./components/price-guide/PriceGuide";
import WhyBest from "./components/why-best/WhyBest";
import ReadyToSmall from "./components/ready-to-small/ReadyToSmall";

const home = () => {
  return (
    <main>
      <Hero />
      <ServiceSection />
      <Methodology />
      <ReadyTo />
      <PriceGuide />
      <WhyBest />
      <ReadyToSmall />
    </main>
  );
};

export default home;
