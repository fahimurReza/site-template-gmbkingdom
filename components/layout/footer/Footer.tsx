import Logo from "@/components/common/Logo";
import ContactInfo from "./ContactInfo";
import Expartise from "./Expartise";
import Locations from "./Locations";
import GoogleMap from "./GoogleMap";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <main className="bg-brand-teal">
      {/* Main footer content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-10 lg:gap-12 base-padding py-12 md:py-16">
        {/* Logo + ContactInfo – full width on mobile, col-span-3 on desktop */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-white flex flex-col gap-6">
          <div className="w-full flex">
            <Logo variant="white" className="w-7/10 sm:w-60" />
          </div>
          <ContactInfo />
        </div>

        {/* Expartise – full width on mobile, col-span-2 on desktop */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-white/70">
          <div className="grid grid-cols-2 gap-6 md:gap-10 lg:gap-12">
            {/* Expartise */}
            <div className="text-center sm:text-left">
              <Expartise />
            </div>

            {/* Locations */}
            <div className="text-center sm:text-left">
              <Locations />
            </div>
          </div>
        </div>

        {/* GoogleMap – full width on mobile, col-span-3 on desktop */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-white/70">
          <GoogleMap />
        </div>
      </div>

      {/* Copyright – always full width */}
      <CopyRight />
    </main>
  );
};

export default Footer;
