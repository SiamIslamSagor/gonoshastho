"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const specialties = [
  {
    id: 1,
    title: "হরমোনাল ডিসঅর্ডার",
    description:
      "থাইরয়েড সমস্যা, পলিসিস্টিক ওভারি সিনড্রোম (পিসিওএস), ডায়াবেটিস, মেনোপজ সমস্যা ইত্যাদি হরমোনাল সমস্যা সমাধানে আমাদের চিকিৎসকগণ বিশেষ অভিজ্ঞতা অর্জন করেছেন।",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "অটোইমিউন ডিজিজ",
    description:
      "রিউমাটয়েড আর্থ্রাইটিস, লুপাস, পসোরিয়াসিস, ভিটিলিগো, এলোপেসিয়া, টাইপ ১ ডায়াবেটিসের মতো অটোইমিউন রোগের জন্য আমাদের বিশেষায়িত চিকিৎসা পদ্ধতি রয়েছে।",
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
  },
  {
    id: 3,
    title: "ত্বক সমস্যা",
    description:
      "একজিমা, পসোরিয়াসিস, এলোপেসিয়া, একনে, ফাঙ্গাল ইনফেকশন, এলার্জিক স্কিন কন্ডিশন, রোজাসিয়া এবং বিভিন্ন ত্বকের সমস্যার জন্য আমাদের বিশেষজ্ঞ চিকিৎসক দল রয়েছে।",
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
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "শ্বাসতন্ত্রের রোগ",
    description:
      "অ্যাজমা, ক্রনিক ব্রংকাইটিস, এলার্জিক রাইনাইটিস, সাইনুসাইটিস, টনসিলাইটিস সহ শ্বাসতন্ত্রের বিভিন্ন রোগের চিকিৎসা আমাদের মেডিকেল সেন্টারে করা হয়।",
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
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "পাচনতন্ত্রের সমস্যা",
    description:
      "আইবিএস (ইরিটেবল বাওয়েল সিনড্রোম), অ্যাসিডিটি, গ্যাস্ট্রাইটিস, আমাশয়, কোষ্ঠকাঠিন্য, হজমের সমস্যা, লিভারের রোগ সহ বিভিন্ন পাচনতন্ত্রের সমস্যা নিরাময়ে আমরা অভিজ্ঞ।",
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
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "মানসিক স্বাস্থ্য",
    description:
      "উদ্বেগ, বিষণ্ণতা, অনিদ্রা, স্ট্রেস, পোস্ট-ট্রমাটিক স্ট্রেস ডিসঅর্ডার (পিটিএসডি), ওসিডি (অবসেসিভ কম্পালসিভ ডিসঅর্ডার) সহ মানসিক সমস্যার চিকিৎসা প্রদান করা হয়।",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
];

export default function DoctorsSpecialties() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);
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

      // Specialties staggered animation
      gsap.fromTo(
        ".specialty-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: specialtiesRef.current,
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
        <div ref={headingRef} className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            চিকিৎসা বিশেষজ্ঞতা
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আমাদের চিকিৎসকদের বিশেষজ্ঞতা
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            গণস্বাস্থ্য হোমিও'র চিকিৎসকগণ বিভিন্ন রোগের চিকিৎসায় বিশেষজ্ঞতা
            অর্জন করেছেন। নিচে তাদের প্রধান বিশেষজ্ঞতার ক্ষেত্রগুলি দেখানো হলো।
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12 lg:gap-16 items-center">
          <div ref={specialtiesRef} className="order-2 md:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialties.map(specialty => (
                <div
                  key={specialty.id}
                  className="specialty-item p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-green-100 text-green-600 rounded-lg">
                      {specialty.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {specialty.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {specialty.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative aspect-square max-w-lg mx-auto order-1 md:order-2"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-tr from-green-500/20 to-green-100/30 flex items-center justify-center">
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                {/* Animated background elements */}
                <div className="absolute w-full h-full">
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-green-300/20 animate-ping-slow"></div>
                  <div className="absolute top-1/4 -right-3 w-6 h-6 rounded-full bg-green-400/30"></div>
                  <div className="absolute bottom-1/4 -left-3 w-8 h-8 rounded-full border-2 border-green-300/30 animate-spin-slow"></div>
                </div>

                {/* Rotating border */}
                <div className="absolute inset-0">
                  <div className="absolute inset-4 rounded-full border-2 border-dashed border-green-300/50 animate-spin-slow-reverse"></div>
                </div>

                {/* Doctor image or illustration */}
                <div className="relative w-3/4 h-3/4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/images/doctors/team.jpg"
                    alt="Medical Team"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Specialty badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg p-3">
                  <div className="w-12 h-12 flex items-center justify-center text-green-600">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-full shadow-lg p-3">
                  <div className="w-12 h-12 flex items-center justify-center text-green-600">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
