"use client";

import { useState } from "react";
import Logo from "../../common/Logo";
import Navigation from "./Navigation";
import CallButton from "./CallButton";
import QuoteButton from "./QuoteButton";
import HamburgerIcon from "@/components/common/HamburgerIcon";
import CrossIcon from "@/components/common/CrossIcon";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <main className="base-padding h-16 flex items-center bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full">
        <a href="/">
          <Logo className="h-50 w-50 md:h-55 md:w-55" />
        </a>

        {/* Desktop Navigation + Quote Button */}
        <div className="hidden lg:flex items-center gap-6">
          <Navigation />
          <QuoteButton />
        </div>

        {/* Mobile: Call button + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <CallButton number="+13235550123" />
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-brand-teal hover:text-brand-orange transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <CrossIcon className="h-6 w-6" />
            ) : (
              <HamburgerIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-40 animate-fade-in">
          <div className="base-padding py-2 flex flex-col gap-2">
            <Navigation mobile onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </main>
  );
};

export default NavBar;
