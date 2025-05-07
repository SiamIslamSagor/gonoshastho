"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "প্রাকৃতিক চিকিৎসা",
    description:
      "হোমিওপ্যাথি হলো একটি প্রাকৃতিক ও হলিস্টিক চিকিৎসা পদ্ধতি যা সম্পূর্ণ প্রাকৃতিক উপাদান থেকে তৈরি।",
  },
  {
    id: 2,
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "দ্রুত ফলাফল",
    description:
      "আমাদের চিকিৎসা দ্বারা রোগীরা অল্প সময়ের মধ্যেই উপশম পেয়ে থাকেন, বিশেষ করে এলার্জি ও ত্বকের রোগে।",
  },
  {
    id: 3,
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "সর্বাধুনিক পদ্ধতি",
    description:
      "ক্লাসিক্যাল হোমিওপ্যাথির সাথে আধুনিক চিকিৎসা পদ্ধতি সমন্বয় করে আমরা উন্নত চিকিৎসা সেবা প্রদান করি।",
  },
  {
    id: 4,
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    title: "ব্যক্তিগত যত্ন",
    description:
      "প্রতিটি রোগীর জন্য আমরা তাদের রোগের লক্ষণ ও ব্যক্তিগত প্রকৃতি অনুযায়ী সম্পূর্ণ পৃথক চিকিৎসা পরিকল্পনা করি।",
  },
];

export default function ServicesFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
          },
        }
      );

      // Features staggered animation
      gsap.fromTo(
        ".feature-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
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
      className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={headingRef} className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              আমাদের বৈশিষ্ট্য
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              কেন গণস্বাস্থ্য হোমিও<span className="text-green-600">?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              আমাদের হোমিওপ্যাথিক চিকিৎসা সেবা অন্যান্য চিকিৎসা পদ্ধতি থেকে অনেক
              অংশেই আলাদা এবং বেশি কার্যকর, বিশেষ করে দীর্ঘমেয়াদী রোগের
              ক্ষেত্রে
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div ref={imageRef} className="relative order-2 md:order-1">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-tr from-green-500/20 to-green-100/30 flex items-center justify-center">
                  <svg
                    className="h-1/2 w-1/2 text-green-600/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>

                {/* Decorative circles */}
                <div className="absolute w-full h-full">
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-green-300/20 animate-ping-slow"></div>
                  <div className="absolute top-1/4 -right-3 w-6 h-6 rounded-full bg-green-400/30"></div>
                  <div className="absolute bottom-1/4 -left-3 w-8 h-8 rounded-full border-2 border-green-300/30 animate-spin-slow"></div>
                </div>

                {/* Rotating border */}
                <div className="absolute inset-0">
                  <div className="absolute inset-4 rounded-full border-2 border-dashed border-green-300/50 animate-spin-slow-reverse"></div>
                </div>

                {/* Image container */}
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/homeopathy.jpg"
                      alt="Homeopathic medicine"
                      fill
                      className="object-cover"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div ref={featuresRef} className="order-1 md:order-2">
              <div className="space-y-6">
                {features.map(feature => (
                  <div
                    key={feature.id}
                    className="feature-item flex gap-5 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
