"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkButton } from "@/app/components/ui/Button";

const services = [
  {
    id: 1,
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
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "ক্লিনিকাল কনসালটেশন",
    description:
      "আমাদের অভিজ্ঞ চিকিৎসকগণ আপনার সমস্যা সম্পর্কে বিস্তারিত শুনবেন এবং উপযুক্ত ঔষধ প্রদান করবেন।",
    benefits: [
      "অভিজ্ঞ হোমিওপ্যাথিক চিকিৎসকদের পরামর্শ",
      "সম্পূর্ণ রোগের ইতিহাস গ্রহণ",
      "রোগের মূল কারণ অনুসন্ধান",
      "দীর্ঘমেয়াদী চিকিৎসা পরিকল্পনা",
    ],
  },
  {
    id: 2,
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
    title: "হোমিওপ্যাথিক ঔষধ",
    description:
      "আমরা সর্বোচ্চ মানের হোমিওপ্যাথিক ঔষধ সরবরাহ করি যা কোন পার্শ্বপ্রতিক্রিয়া ছাড়াই আপনার রোগ নিরাময় করবে।",
    benefits: [
      "জার্মানী থেকে আমদানিকৃত উচ্চমানের ঔষধ",
      "সঠিক পটেন্সি নির্বাচন",
      "পার্শ্বপ্রতিক্রিয়া মুক্ত চিকিৎসা",
      "সম্পূর্ণ নিরাময়ের গ্যারান্টি",
    ],
  },
  {
    id: 3,
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
          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
        />
      </svg>
    ),
    title: "বিশেষজ্ঞ চিকিৎসা",
    description:
      "দীর্ঘদিনের জটিল রোগসমূহের জন্য আমাদের বিশেষজ্ঞ চিকিৎসকগণ বিশেষ পরামর্শ প্রদান করেন।",
    benefits: [
      "ক্রনিক ডিজিজের চিকিৎসা",
      "অটোইমিউন ডিজিজের চিকিৎসা",
      "থাইরয়েড সমস্যার সমাধান",
      "হরমোনাল ইমব্যালান্সের চিকিৎসা",
    ],
  },
  {
    id: 4,
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "মানসিক স্বাস্থ্য সেবা",
    description:
      "হোমিওপ্যাথিক চিকিৎসার মাধ্যমে মানসিক চাপ, উদ্বেগ, অবসাদসহ বিভিন্ন মানসিক সমস্যার সমাধান করা হয়।",
    benefits: [
      "মানসিক চাপ ও উদ্বেগ দূরীকরণ",
      "ঘুমের সমস্যার সমাধান",
      "মনোযোগ ও স্মৃতিশক্তি বৃদ্ধি",
      "ডিপ্রেশন থেকে মুক্তি",
    ],
  },
  {
    id: 5,
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
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "অনলাইন কনসালটেশন",
    description:
      "আপনি যেখানেই থাকুন না কেন, আমাদের অনলাইন কনসালটেশন সেবা মাধ্যমে ঘরে বসেই চিকিৎসা পরামর্শ নিতে পারেন।",
    benefits: [
      "ভিডিও কনসালটেশন",
      "২৪/৭ অনলাইন সেবা",
      "অনলাইনে প্রেসক্রিপশন",
      "হোম ডেলিভারি",
    ],
  },
  {
    id: 6,
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
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "ফোনে পরামর্শ",
    description:
      "জরুরি প্রয়োজনে আমাদের হটলাইন নম্বরে ফোন করে পরামর্শ নিতে পারেন যেকোন সময়।",
    benefits: [
      "২৪ ঘন্টা কল সেন্টার",
      "অভিজ্ঞ মেডিকেল এডভাইজর",
      "জরুরি চিকিৎসা পরামর্শ",
      "ফলোআপ রিমাইন্ডার",
    ],
  },
];

export default function ServicesList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRefs = useRef<HTMLDivElement[]>([]);

  const assignCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) cardsRefs.current[index] = el;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
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

    // Only animate cards that have been assigned refs
    const cards = cardsRefs.current.filter(card => card !== undefined);

    // Staggered card animations
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="services-list"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            আমাদের বিশেষায়িত সেবা
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            হোমিওপ্যাথিক চিকিৎসা সেবা
          </h2>
          <p className="text-lg text-gray-600">
            গণস্বাস্থ্য হোমিও'তে আমরা বিভিন্ন রোগের জন্য উন্নতমানের চিকিৎসা সেবা
            প্রদান করি। আমাদের সকল সেবা শতভাগ প্রাকৃতিক এবং
            পার্শ্বপ্রতিক্রিয়ামুক্ত।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => assignCardRef(el, index)}
              className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 overflow-hidden group ${
                activeIndex === service.id
                  ? "ring-2 ring-green-400 shadow-lg"
                  : ""
              }`}
              onMouseEnter={() => setActiveIndex(service.id)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center text-green-600 bg-green-50 transition-all duration-300 ${
                      activeIndex === service.id
                        ? "bg-green-600 text-white scale-110"
                        : "group-hover:bg-green-600 group-hover:text-white"
                    }`}
                  >
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Benefits list that appears on hover or active state */}
                <div
                  className={`overflow-hidden transition-all duration-300 mb-6 ${
                    activeIndex === service.id
                      ? "max-h-80 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <h4 className="font-medium text-gray-900 mb-2">
                    সুবিধাসমূহ:
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/appointment"
                    className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors font-medium"
                  >
                    <span>অ্যাপয়েন্টমেন্ট নিন</span>
                    <svg
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <LinkButton href="/appointment" variant="primary" size="lg">
            অ্যাপয়েন্টমেন্ট নিন
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
