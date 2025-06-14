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
          {/* <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            "আমরা শুধু চিকিৎসা দেই না, দেই আশার নতুন ঠিকানা"
          </h1> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            আমাদের <span className="text-green-600">পরিচয়</span>
          </h2>
          <p
            ref={textRef}
            className="max-w-3xl text-lg md:text-xl text-gray-700 mb-10"
          >
            "আমরা শুধু চিকিৎসা দেই না, দেই আশার নতুন ঠিকানা।" ১৯৯৮ সাল থেকে,
            গণস্বাস্থ্য হোমিও ক্যান্সারসহ বহু জটিল রোগে রোগীদের প্রাকৃতিক ও
            পার্শ্বপ্রতিক্রিয়াহীন চিকিৎসা সেবা দিয়ে আসছে। শুধু বাংলাদেশেই নয়,
            আমরা গ্লোবাল ক্যান্সার পেশেন্টদের জন্য একটি বিকল্প নিরাপদ সমাধান
            তৈরির স্বপ্ন দেখি।
          </p>

          {/* Stats */}
          <div
            ref={imageRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-green-600 mb-2">২৫+</div>
              <div className="text-gray-600">বছরের আস্থা ও নেতৃত্ব</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-green-600 mb-2">১০+</div>
              <div className="text-gray-600">চিকিৎসায় দক্ষতা ও দায়িত্ব</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ১০,০০০+
              </div>
              <div className="text-gray-600">রোগীর হাসি, আমাদের অর্জন</div>
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
