"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { LinkButton } from "@/app/components/ui/Button";

export default function AboutTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
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
    if (isVisible && cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".team-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 rounded-bl-[10rem] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-50 rounded-tr-[10rem] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4">
            <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              আমাদের দল
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            অভিজ্ঞ <span className="text-green-600">চিকিৎসকবৃন্দ</span>
          </h2>
          <p className="text-lg text-gray-700">
            গণস্বাস্থ্য হোমিও'র চিকিৎসকগণ হোমিওপ্যাথি বিষয়ে উচ্চ শিক্ষা ও দীর্ঘ
            অভিজ্ঞতা সম্পন্ন। তাদের সাথে পরিচিত হোন।
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Doctor 1 */}
          <div className="team-card bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-green-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 text-center">
                  <svg
                    className="h-20 w-20 mx-auto mb-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="bg-white/90 rounded-full p-2 hover:bg-green-100 transition-colors"
                  >
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/90 rounded-full p-2 hover:bg-green-100 transition-colors"
                  >
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/90 rounded-full p-2 hover:bg-green-100 transition-colors"
                  >
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                ডাঃ মুহাম্মদ রহমান
              </h3>
              <p className="text-green-600 font-medium mb-3">প্রধান চিকিৎসক</p>
              <p className="text-gray-700 mb-4">
                DHMS, MD (Homeo) - ২০ বছরের অভিজ্ঞতা। বিশেষত্ব: ক্রনিক ডিজিজ,
                স্কিন ডিজিজ
              </p>
              <LinkButton
                href="/appointment"
                variant="outline"
                className="w-full"
              >
                অ্যাপয়েন্টমেন্ট নিন
              </LinkButton>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="team-card bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-green-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 text-center">
                  <svg
                    className="h-20 w-20 mx-auto mb-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="bg-white/90 rounded-full p-2 hover:bg-green-100 transition-colors"
                  >
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/90 rounded-full p-2 hover:bg-green-100 transition-colors"
                  >
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/90 rounded-full p-2 hover:bg-green-100 transition-colors"
                  >
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                ডাঃ ফারহানা আক্তার
              </h3>
              <p className="text-green-600 font-medium mb-3">সিনিয়র চিকিৎসক</p>
              <p className="text-gray-700 mb-4">
                DHMS, BHMS - ১৫ বছরের অভিজ্ঞতা। বিশেষত্ব: মহিলা রোগ, শিশু রোগ
              </p>
              <LinkButton
                href="/appointment"
                variant="outline"
                className="w-full"
              >
                অ্যাপয়েন্টমেন্ট নিন
              </LinkButton>
            </div>
          </div>

          {/* Doctor 3 */}
          <div className="team-card bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-green-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 text-center">
                  <svg
                    className="h-20 w-20 mx-auto mb-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="bg-white/90 rounded-full p-2 hover:bg-green-100 transition-colors"
                  >
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/90 rounded-full p-2 hover:bg-green-100 transition-colors"
                  >
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/90 rounded-full p-2 hover:bg-green-100 transition-colors"
                  >
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                ডাঃ আবদুর রশিদ
              </h3>
              <p className="text-green-600 font-medium mb-3">
                জেনারেল হোমিওপ্যাথ
              </p>
              <p className="text-gray-700 mb-4">
                BHMS, MSc (USA) - ১২ বছরের অভিজ্ঞতা। বিশেষত্ব: গ্যাস্ট্রো,
                এলার্জি, হার্ট ডিজিজ
              </p>
              <LinkButton
                href="/appointment"
                variant="outline"
                className="w-full"
              >
                অ্যাপয়েন্টমেন্ট নিন
              </LinkButton>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <LinkButton href="/doctors" variant="secondary">
            সকল চিকিৎসকদের দেখুন
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
