"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-green-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Section */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-white p-3 shadow-xl">
              {/* Main Image */}
              <div className="relative h-[350px] md:h-[500px] w-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-green-400 flex items-center justify-center">
                  <div className="p-8 text-white text-center">
                    {/* <svg
                      className="h-20 w-20 mx-auto mb-4 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg> */}
                    <div className="flex items-center justify-center mb-5">
                      <Image
                        src="/logo.png"
                        alt="গণস্বাস্থ্য হোমিও"
                        width={160}
                        height={40}
                        priority
                      />
                    </div>
                    <h3 className="text-2xl font-bold">
                      “সাফল্যের গল্প – গণস্বাস্থ্য হোমিও”
                    </h3>
                    <p className="text-white/90 mt-2">
                      “সুস্থতা ফিরেছে হাজারো জীবনে – দেখে নিন আমাদের
                      সফলতার গল্পগুলো।”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-full shadow-xl p-5 animate-float delay-500">
              <div className="text-center h-20 w-20 flex flex-col items-center justify-center">
                <span className="block text-3xl font-bold text-green-600">
                  ২৫+
                </span>
                <span className="block text-sm text-gray-500">
                  বছরের অভিজ্ঞতা
                </span>
              </div>
            </div>

            {/* Patients Count */}
            <div className="absolute -top-8 -left-8 bg-white rounded-full shadow-xl p-5 animate-float">
              <div className="text-center h-20 w-20 flex flex-col items-center justify-center">
                <span className="block text-3xl font-bold text-green-600">
                  ১০K+
                </span>
                <span className="block text-sm text-gray-500">সফল কেস</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-4">
              <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                আমাদের সম্পর্কে
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              যেখানে আধুনিক চিকিৎসা থেমে যায়, সেখানে গণস্বাস্থ্য হোমিও
              বিশ্বজুড়ে রোগীদের জন্য নতুন আশা হয়ে দাঁড়ায়
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              ক্যান্সার বিশ্বব্যাপী এক অভিশাপ — যার যন্ত্রণা, খরচ ও মানসিক চাপ
              অনেকের কাছে অসহনীয়। আমরা বিশ্বাস করি, চিকিৎসা একটি মৌলিক অধিকার —
              দেশ, জাতি বা সামর্থ্যের ঊর্ধ্বে। গণস্বাস্থ্য হোমিও সেই বিশ্বাস
              নিয়ে আজ শুধু দেশের গণ্ডিতে নয়, বৈশ্বিকভাবে ক্যান্সার রোগীদের
              জন্য এক আশার নাম হয়ে উঠতে চায়।
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    ২৫+ বছরের অভিজ্ঞতা ও হাজারো সফল কেস
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    ক্যান্সার, কিডনি, থ্যালাসেমিয়া ও হরমোন সমস্যায় কার্যকর
                    চিকিৎসা
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    পার্শ্বপ্রতিক্রিয়াহীন ও সাশ্রয়ী প্রাকৃতিক সেবা
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    অনলাইন কনসালটেশন ও দ্রুত বুকিং সাপোর্ট
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block text-center"
              >
                আরও জানুন
              </Link>
              <Link
                href="/contact"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 font-medium py-3 px-6 rounded-md transition-colors inline-block text-center"
              >
                যোগাযোগ করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
