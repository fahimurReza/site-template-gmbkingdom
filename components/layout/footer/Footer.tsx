import Logo from "@/components/common/Logo";
import ContactInfo from "./ContactInfo";
import Expartise from "./Expartise";
import Locations from "./Locations";
import GoogleMap from "./GoogleMap";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <main className="bg-brand-teal">
      <div className="grid grid-cols-10 base-padding py-16">
        <div className="col-span-3 text-white">
          <Logo variant="white" size={240} />
          <ContactInfo />
        </div>
        <div className="col-span-2 text-white/70">
          <Expartise />
        </div>
        <div className="col-span-2 text-white/70">
          <Locations />
        </div>
        <div className="col-span-3 text-white/70">
          <GoogleMap />
        </div>
      </div>
      <CopyRight />
    </main>
  );
};

export default Footer;
