"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processSteps = [
  {
    id: 1,
    title: "প্রাথমিক পরামর্শ",
    description:
      "রোগীর সম্পূর্ণ রোগের ইতিহাস, লক্ষণ, ব্যক্তিগত অভ্যাস ও জীবনধারা সম্পর্কে বিস্তারিত জানা।",
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "রোগ নির্ণয়",
    description:
      "রোগীর সমস্যা বিশ্লেষণ করে সঠিক রোগ নির্ণয় এবং প্রয়োজনে ল্যাবরেটরি পরীক্ষার ব্যবস্থা করা।",
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
    title: "ঔষধ নির্বাচন",
    description:
      "রোগীর ব্যক্তিগত প্রকৃতি ও রোগের লক্ষণ অনুযায়ী সঠিক ঔষধ ও পটেন্সি নির্বাচন।",
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
    title: "চিকিৎসা পরিকল্পনা",
    description:
      "রোগের তীব্রতা ও প্রকৃতি অনুযায়ী সম্পূর্ণ চিকিৎসা পরিকল্পনা প্রণয়ন ও ব্যাখ্যা করা।",
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
    title: "ফলোআপ পরামর্শ",
    description:
      "নিয়মিত ফলোআপ পরামর্শের মাধ্যমে রোগীর অবস্থার উন্নতি পর্যবেক্ষণ ও প্রয়োজনে ঔষধ সমন্বয় করা।",
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
            রোগী থেকে সম্পূর্ণ সুস্থতা পর্যন্ত আমাদের সমন্বিত হোমিওপ্যাথিক
            চিকিৎসা পদ্ধতি
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
