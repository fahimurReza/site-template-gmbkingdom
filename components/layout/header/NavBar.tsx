"use client";

import { useState, useEffect } from "react";
import Logo from "../../common/Logo";
import Navigation from "./Navigation";
import HeaderCallButton from "./HeaderCallButton";
import CallButton from "@/components/ui/CallButton";
import Button from "@/components/ui/Button";
import QuoteButton from "./QuoteButton";
import HamburgerIcon from "@/components/common/HamburgerIcon";
import CrossIcon from "@/components/common/CrossIcon";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Freeze body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <main className="base-padding h-16 flex items-center bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full">
        <a href="/">
          <Logo className="h-50 w-50 md:h-55 md:w-55" />
        </a>

        {/* Desktop: Navigation + Quote Button (≥ 1024px) */}
        <div className="hidden lg:flex items-center gap-6">
          <Navigation />
          <QuoteButton />
        </div>

        {/* Mobile/Tablet: Call button + Hamburger (rightmost) */}
        <div className="flex lg:hidden items-center gap-2">
          <HeaderCallButton number="+13235550123" />
          <button
            onClick={toggleMobileMenu}
            className="py-2 pl-2 text-brand-teal hover:text-brand-orange transition"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <CrossIcon className="h-6 w-6" />
            ) : (
              <HamburgerIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu – full height, slide from right, blur backdrop */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop (click to close) */}
          <div
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-in panel from right */}
          <div
            className={`
              lg:hidden fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl z-50
              transform transition-transform duration-300 ease-in-out
              ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            {/* Top bar with close button (top-right) */}
            <div className="flex justify-between p-5 ">
              <h2 className="content-center ml-3 text-xl text-brand-teal font-semibold">
                Menu
              </h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  p-3 rounded
                  text-brand-teal hover:text-brand-orange 
                  hover:bg-gray-100 transition
                "
                aria-label="Close menu"
              >
                <CrossIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Menu content – full remaining height, scrollable */}
            <div className="h-[calc(100%-80px)] overflow-y-auto">
              <div className="base-padding py-6 flex flex-col gap-6">
                <Navigation mobile onClose={() => setIsMobileMenuOpen(false)} />

                {/* Optional: repeated call button at bottom for convenience */}
                <div className="mt-auto pt-8 px-2 flex flex-col gap-4 justify-center">
                  <CallButton
                    className="w-full text-base!"
                    iconClassName="rotate-90 w-5"
                    phoneNumber="(469) 535-6405"
                    buttonText="Call (469) 535-6405"
                  />
                  <Button variant="secondary" className="text-base! py-0.5">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default NavBar;
