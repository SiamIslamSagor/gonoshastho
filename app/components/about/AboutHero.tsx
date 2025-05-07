"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && sectionRef.current && !tl.current) {
      tl.current = gsap.timeline();

      // Animate the heading
      if (headingRef.current) {
        tl.current.fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }

      // Animate the text
      if (textRef.current) {
        tl.current.fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );
      }

      // Animate the image
      if (imageRef.current) {
        tl.current.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }
    }

    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[60vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-br from-green-50 to-white transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/3 w-[15rem] h-[15rem] rounded-full bg-green-300/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-10 w-[20rem] h-[20rem] rounded-full bg-green-400/10 blur-3xl"></div>

      {/* Content container */}
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            আমাদের <span className="text-green-600">পরিচয়</span>
          </h1>
          <p
            ref={textRef}
            className="max-w-3xl text-lg md:text-xl text-gray-700 mb-10"
          >
            ১৯৯৮ সাল থেকে, গণস্বাস্থ্য হোমিও হোমিওপ্যাথিক চিকিৎসা সেবা প্রদানের
            মাধ্যমে হাজার হাজার রোগীকে সুস্থতার পথে নিয়ে এসেছে। আমরা বিশ্বাস
            করি, প্রাকৃতিক চিকিৎসা পদ্ধতি মানুষের জীবনে সুস্থতা ও স্বাস্থ্য
            ফিরিয়ে আনতে পারে।
          </p>

          {/* Stats */}
          <div
            ref={imageRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-green-600 mb-2">২৫+</div>
              <div className="text-gray-600">বছরের অভিজ্ঞতা</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-green-600 mb-2">১০+</div>
              <div className="text-gray-600">অভিজ্ঞ চিকিৎসক</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-green-600 mb-2">৫০K+</div>
              <div className="text-gray-600">সন্তুষ্ট রোগী</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-16 h-16 bg-gradient-to-r from-green-300/20 to-green-400/20 rounded-full animate-float"></div>
      <div className="absolute bottom-[15%] left-[7%] w-10 h-10 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-full animate-float delay-500"></div>
    </section>
  );
}
