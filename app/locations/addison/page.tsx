import HeroSection from "./components/HeroSection";
import PageContent from "./components/PageContent";
import FullProject from "./components/FullProject";
import PopularServices from "./components/PopularServices";
import CommonProject from "./components/CommonProject";
import FAQSection from "./components/FAQSection";
import DirectQuote from "./components/DirectQuote";

const page = () => {
  return (
    <div>
      <HeroSection />
      <PageContent />
      <section className="bg-brand-gray-bg base-padding pt-6">
        <FullProject />
        <PopularServices />
        <CommonProject />
        <FAQSection />
        <DirectQuote />
      </section>
    </div>
  );
};

export default page;
