import Logo from "@/components/common/Logo";
import ContactInfo from "./ContactInfo";
import Expartise from "./Expartise";
import Locations from "./Locations";
import GoogleMap from "./GoogleMap";

const Footer = () => {
  return (
    <main className="base-padding py-16 bg-brand-teal">
      <div className="grid grid-cols-10">
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
    </main>
  );
};

export default Footer;
