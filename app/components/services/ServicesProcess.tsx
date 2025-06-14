"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processSteps = [
  {
    id: 1,
    title: "রোগীর আগমন",
    description:
      "রোগী আমাদের কাছে আসেন ফেসবুক বিজ্ঞাপন, পুরনো রোগীদের রেফারেন্স, স্থানীয় প্রতিনিধি বা পরিচিতজনের মাধ্যমে। সহকারী টিম রোগীর সঙ্গে যোগাযোগ করে প্রাথমিক তথ্য সংগ্রহ করে।",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "রিপোর্ট যাচাই ও রোগ নির্ধারণ",
    description:
      "রোগীর পূর্বের রিপোর্টগুলো যাচাই করা হয়। যদি রোগ জানা না থাকে, আমরা ব্যাখ্যা করে বুঝিয়ে দিই রোগের প্রকৃতি। প্রয়োজনে বিশেষজ্ঞ চিকিৎসকের মূল্যায়ন দেওয়া হয়।",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "এক মাসের চিকিৎসা শুরু",
    description:
      "রোগ অনুযায়ী প্রথম এক মাসের কোর্স দেওয়া হয়। প্রতিটি ওষুধের এক্সপায়ারি থাকে ১ মাস। ওষুধের প্রভাব পর্যবেক্ষণ করে চিকিৎসা হালনাগাদ করা হয়।",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "মাসিক ফলোআপ ও চিকিৎসা আপডেট",
    description:
      "প্রতিমাসে রোগী আবার এসে দ্বিতীয়, তৃতীয় ও চতুর্থ মাসের কোর্স নেন। এই ৪ মাসের ধারাবাহিক চিকিৎসায় রোগী নিজেই উন্নতি দেখতে পান।",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "১ বছরের ফলোআপ সহায়তা",
    description:
      "৪ মাসের প্রাথমিক চিকিৎসার পরও রোগীকে আমরা একদম ছেড়ে দিই না। রোগ পুরোপুরি নিয়ন্ত্রণে রাখার জন্য ১ বছর নিয়মিত ফলোআপ চালু রাখা হয়।",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
  },
];

export default function ServicesProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Timeline steps staggered animation
      gsap.fromTo(
        ".process-step",
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
          },
        }
      );

      // Animate the connecting line
      gsap.fromTo(
        ".process-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            আমাদের প্রক্রিয়া
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            চিকিৎসা প্রক্রিয়া
          </h2>
          <p className="text-lg text-gray-600">
            আমরা শুধু চিকিৎসা দিই না, সুস্থতার যাত্রায় একসাথে হাঁটি
          </p>
        </div>

        <div ref={timelineRef} className="max-w-6xl mx-auto my-16 relative">
          {/* Horizontal connecting line */}
          <div className="process-line hidden md:block absolute top-16 left-[10%] right-[10%] h-1 bg-green-200 origin-left"></div>

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="process-step flex flex-col items-center text-center relative group"
              >
                {/* Step number badge */}
                <div className="absolute -top-6 bg-white text-green-700 font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-green-500 z-10 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  {step.id}
                </div>

                {/* Icon circle */}
                <div className="relative w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4 z-10 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">
                  {step.icon}

                  {/* Ping animation for active step */}
                  <span className="absolute w-full h-full rounded-full bg-green-400/20 animate-ping-slow opacity-0 group-hover:opacity-100"></span>
                </div>

                {/* Mobile line connector */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden absolute top-16 h-10 w-px bg-green-300 left-1/2 transform -translate-x-1/2"></div>
                )}

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
