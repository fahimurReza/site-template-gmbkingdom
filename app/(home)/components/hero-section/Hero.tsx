"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Content from "./Content";
import CallToAction from "./CallToAction";
import TrackRecord from "./TrackRecord";
import QuoteForm from "@/components/ui/QuoteForm";

const heroImages = [
  {
    src: "/hero-image-01.png",
    alt: "Frisco Concrete Contractors home image 1",
  },
  {
    src: "/hero-image-02.png",
    alt: "Frisco Concrete Contractors home image 2",
  },
  {
    src: "/hero-image-03.png",
    alt: "Frisco Concrete Contractors home image 3",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden text-white">
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
            fill={true}
            className="object-cover object-center"
            priority={index === 0}
            quality={80}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-linear-to-r from-brand-teal to-brand-teal/70 -z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/10 to-black/10 -z-10" />

      <div className="grid grid-cols-2 base-padding py-12">
        <div className="relative z-10 text-left">
          <Content />
          <CallToAction />
          <TrackRecord />
        </div>
        <div className="flex justify-end relative z-10">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
