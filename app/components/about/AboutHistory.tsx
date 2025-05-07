"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutHistory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && timelineRef.current && !tl.current) {
      const timelineCards =
        timelineRef.current.querySelectorAll(".timeline-card");
      const timelineDots =
        timelineRef.current.querySelectorAll(".timeline-dot");
      const timelineYears =
        timelineRef.current.querySelectorAll(".timeline-year");
      const timelineConnectors = timelineRef.current.querySelectorAll(
        ".timeline-connector"
      );

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // First animate the years
      tl.current.fromTo(
        timelineYears,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        }
      );

      // Then animate the dots
      tl.current.fromTo(
        timelineDots,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.8"
      );

      // Animate the connecting lines
      tl.current.fromTo(
        timelineConnectors,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          stagger: 0.15,
          ease: "power3.inOut",
        },
        "-=1.5"
      );

      // Finally, animate the cards
      tl.current.fromTo(
        timelineCards,
        {
          opacity: 0,
          y: 30,
          rotateX: -10,
          transformOrigin: "bottom center",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=1.5"
      );
    }

    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, [isVisible]);

  // History data
  const historyData = [
    {
      year: "১৯৯৮",
      title: "প্রতিষ্ঠাকাল",
      description:
        "ঢাকার মিরপুর এলাকায় একটি ছোট্ট ক্লিনিক দিয়ে গণস্বাস্থ্য হোমিও'র যাত্রা শুরু হয়।",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
      color: "green",
    },
    {
      year: "২০০৫",
      title: "প্রথম শাখা",
      description:
        "ঢাকার মোহাম্মদপুরে গণস্বাস্থ্য হোমিও'র দ্বিতীয় শাখা খোলা হয়। এই সময়ে রোগীর সংখ্যা দ্বিগুণেরও বেশি বৃদ্ধি পায়।",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      year: "২০১২",
      title: "গবেষণা কেন্দ্র প্রতিষ্ঠা",
      description:
        "হোমিওপ্যাথিক গবেষণা এবং ঔষধ উৎপাদনের জন্য একটি গবেষণা কেন্দ্র প্রতিষ্ঠা করা হয়।",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      color: "purple",
    },
    {
      year: "২০১৮",
      title: "দেশব্যাপী বিস্তার",
      description:
        "গণস্বাস্থ্য হোমিও'র ২০ বছর পূর্তিতে দেশের ৫টি বড় শহরে শাখা খোলা হয়। এই সময়ে অনলাইন কনসালটেশন সেবাও চালু করা হয়।",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "orange",
    },
    {
      year: "২০২৩",
      title: "আধুনিক হোমিওপ্যাথিক হাসপাতাল",
      description:
        "ঢাকার উত্তরায় আধুনিক সুযোগ-সুবিধা সম্পন্ন বৃহত্তম হোমিওপ্যাথিক হাসপাতাল উদ্বোধন করা হয়।",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      color: "green",
    },
  ];

  // Color mapping
  const colorMap = {
    green: {
      bg: "bg-green-600",
      lightBg: "bg-green-100",
      glow: "shadow-green-500/50",
      border: "border-green-300",
    },
    blue: {
      bg: "bg-blue-600",
      lightBg: "bg-blue-100",
      glow: "shadow-blue-500/50",
      border: "border-blue-300",
    },
    purple: {
      bg: "bg-purple-600",
      lightBg: "bg-purple-100",
      glow: "shadow-purple-500/50",
      border: "border-purple-300",
    },
    orange: {
      bg: "bg-orange-500",
      lightBg: "bg-orange-100",
      glow: "shadow-orange-500/50",
      border: "border-orange-300",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-28 bg-gradient-to-b from-green-50 to-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-green-200/30 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-green-200/20 blur-xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-[15%] w-12 h-12 bg-gradient-to-b from-green-300/20 to-transparent rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-[10%] w-8 h-8 bg-gradient-to-b from-green-400/20 to-transparent rounded-full animate-float delay-300"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4">
            <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              আমাদের ইতিহাস
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">২৫</span> বছরের যাত্রা
          </h2>
          <p className="text-lg text-gray-700">
            ১৯৯৮ সাল থেকে আজ পর্যন্ত, গণস্বাস্থ্য হোমিও হোমিওপ্যাথিক চিকিৎসা
            সেবার উৎকর্ষতার নিদর্শন হয়ে রয়েছে। এই সফল যাত্রার কিছু উল্লেখযোগ্য
            মাইলফলক দেখুন।
          </p>
        </div>

        {/* Modern Timeline */}
        <div ref={timelineRef} className="max-w-5xl mx-auto">
          <div className="relative flex flex-col items-center">
            {/* Horizontal timeline with cards */}
            <div className="hidden md:flex w-full justify-between mb-4">
              {historyData.map((item, index) => (
                <div key={`year-${index}`} className="text-center relative">
                  <span
                    className={`timeline-year inline-block text-xl md:text-2xl font-bold ${
                      index === 0
                        ? "text-green-600"
                        : index === 1
                        ? "text-blue-600"
                        : index === 2
                        ? "text-purple-600"
                        : index === 3
                        ? "text-orange-500"
                        : "text-green-600"
                    }`}
                  >
                    {item.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Timeline Track with Dots */}
            <div className="hidden md:flex w-full h-4 items-center relative my-4">
              <div className="w-full h-1 bg-gray-200 rounded-full absolute"></div>

              {historyData.map((item, index) => (
                <React.Fragment key={`dot-${index}`}>
                  <div
                    className={`timeline-dot absolute z-10 w-6 h-6 rounded-full border-2 border-white shadow-lg ${
                      colorMap[item.color as keyof typeof colorMap].bg
                    } ${colorMap[item.color as keyof typeof colorMap].glow}`}
                    style={{
                      left: `${(index / (historyData.length - 1)) * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="absolute inset-0 rounded-full animate-ping-slow opacity-60 bg-white"></div>
                  </div>

                  {index < historyData.length - 1 && (
                    <div
                      className={`timeline-connector absolute h-1 bg-gradient-to-r from-${
                        item.color
                      }-500 to-${historyData[index + 1].color}-500`}
                      style={{
                        left: `${(index / (historyData.length - 1)) * 100}%`,
                        width: `${100 / (historyData.length - 1)}%`,
                      }}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Timeline Cards - Desktop */}
            <div className="hidden md:grid grid-cols-5 gap-6 w-full mt-8">
              {historyData.map((item, index) => (
                <div
                  key={`card-${index}`}
                  className={`timeline-card bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-100 border-t-4 ${
                    colorMap[item.color as keyof typeof colorMap].border
                  } transform hover:-translate-y-1`}
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${
                      colorMap[item.color as keyof typeof colorMap].lightBg
                    } text-${item.color}-600 mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Mobile Timeline (Vertical) */}
            <div className="md:hidden space-y-6 w-full">
              {historyData.map((item, index) => (
                <div key={`mobile-${index}`} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div
                      className={`timeline-year font-bold text-xl mb-2 ${
                        index === 0
                          ? "text-green-600"
                          : index === 1
                          ? "text-blue-600"
                          : index === 2
                          ? "text-purple-600"
                          : index === 3
                          ? "text-orange-500"
                          : "text-green-600"
                      }`}
                    >
                      {item.year}
                    </div>
                    <div
                      className={`timeline-dot z-10 w-5 h-5 rounded-full border-2 border-white shadow-lg ${
                        colorMap[item.color as keyof typeof colorMap].bg
                      }`}
                    ></div>
                    {index < historyData.length - 1 && (
                      <div className="w-1 flex-grow bg-gray-200 my-1"></div>
                    )}
                  </div>
                  <div
                    className={`timeline-card flex-1 bg-white rounded-xl p-4 shadow-md border-l-4 ${
                      colorMap[item.color as keyof typeof colorMap].border
                    }`}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
