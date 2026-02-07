"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Content from "./Content";
import CallToAction from "./CallToAction";
import TrackRecord from "./TrackRecord";
import QuoteForm from "@/components/ui/QuoteForm";

const heroImages = [
  { src: "/hero/image01.jpg", alt: "Frisco Concrete Contractors home image 1" },
  { src: "/hero/image02.jpg", alt: "Frisco Concrete Contractors home image 2" },
  { src: "/hero/image03.jpg", alt: "Frisco Concrete Contractors home image 3" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background images */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={80}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-brand-teal to-brand-teal/60 -z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/10 to-black/10 -z-10" />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 base-padding py-12 pb-20 md:pb-12 w-full">
        {/* Left column */}
        <div className="text-left space-y-8">
          <Content />
          <CallToAction />
          <TrackRecord />
        </div>

        {/* Right column – QuoteForm */}
        <div className="flex justify-center lg:justify-end items-center">
          <QuoteForm
            title="Get a Free Quote"
            subtitle="Share your project scope and we'll deliver a complete proposal within two business days."
          />
        </div>
      </div>
    </section>
  );
}
