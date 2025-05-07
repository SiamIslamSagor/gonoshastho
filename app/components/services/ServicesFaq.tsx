"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const faqs = [
  {
    id: 1,
    question: "হোমিওপ্যাথিক চিকিৎসা কি সত্যিই কার্যকর?",
    answer:
      "হ্যাঁ, হোমিওপ্যাথিক চিকিৎসা এক্রনিক এবং কঠিন রোগ নিরাময়ে অত্যন্ত কার্যকর। বিশ্বব্যাপী গবেষণায় প্রমাণিত হয়েছে যে বিভিন্ন রোগের ক্ষেত্রে, বিশেষ করে এলার্জি, অটোইমিউন, হরমোনাল সমস্যা এবং মানসিক রোগে হোমিওপ্যাথি খুবই কার্যকর।",
  },
  {
    id: 2,
    question: "হোমিওপ্যাথিক ঔষধ কি নিরাপদ?",
    answer:
      "হোমিওপ্যাথিক ঔষধ অত্যন্ত নিরাপদ। এর কোন পার্শ্বপ্রতিক্রিয়া নেই এবং শিশু, গর্ভবতী মহিলা, বয়স্ক সকলের জন্য উপযোগী। ঔষধগুলি অতি সূক্ষ্ম মাত্রায় তৈরি হয় যা শরীরের স্বাভাবিক রোগ প্রতিরোধ ক্ষমতাকে উদ্দীপিত করে।",
  },
  {
    id: 3,
    question: "কত দিন চিকিৎসা নিতে হবে?",
    answer:
      "এটি রোগের ধরন, তীব্রতা এবং ব্যক্তিগত প্রকৃতির উপর নির্ভর করে। সাধারণত তীব্র রোগের (যেমন সর্দি, জ্বর) ক্ষেত্রে কয়েক দিন থেকে কয়েক সপ্তাহ, আর ক্রনিক রোগের (যেমন আর্থ্রাইটিস, অ্যালার্জি) ক্ষেত্রে কয়েক মাস থেকে এক বছর সময় লাগতে পারে।",
  },
  {
    id: 4,
    question: "হোমিওপ্যাথিক চিকিৎসায় কি ধরনের রোগ সারে?",
    answer:
      "হোমিওপ্যাথি বিভিন্ন ধরনের রোগ যেমন এলার্জি, অ্যাজমা, সাইনুসাইটিস, ত্বকের রোগ, অ্যালার্জিক রাইনাইটিস, অটোইমিউন ডিজিজ, থাইরয়েড সমস্যা, পাচক সমস্যা, হরমোনাল অসুস্থতা এবং মানসিক রোগ (বিষণ্ণতা, উদ্বেগ) ইত্যাদির চিকিৎসায় বিশেষভাবে কার্যকর।",
  },
  {
    id: 5,
    question: "গণস্বাস্থ্য হোমিও'তে কোন কোন রোগের চিকিৎসা করা হয়?",
    answer:
      "আমরা সকল ধরনের রোগের চিকিৎসা করি, তবে আমরা বিশেষভাবে অভিজ্ঞ: ত্বকের রোগ (একজিমা, সোরিয়াসিস), হজম সংক্রান্ত রোগ (আইবিএস, অ্যাসিডিটি), মাইগ্রেন ও মাথাব্যথা, হারপিস, থাইরয়েড সমস্যা, অটোইমিউন রোগ, হরমোনাল অসন্তুলন, অ্যালার্জি এবং শ্বাসকষ্টজনিত রোগ সহ আরও অনেক রোগের চিকিৎসা করে থাকি।",
  },
  {
    id: 6,
    question: "হোমিওপ্যাথি এবং এলোপ্যাথির মধ্যে পার্থক্য কি?",
    answer:
      "এলোপ্যাথি (আধুনিক চিকিৎসা) রোগের লক্ষণগুলিকে দমন করে, যখন হোমিওপ্যাথি শরীরের আভ্যন্তরীণ রোগ প্রতিরোধ ক্ষমতাকে উদ্দীপিত করে রোগের মূল কারণ দূর করে। এলোপ্যাথিতে ঔষধের মাত্রা বেশি থাকে এবং পার্শ্বপ্রতিক্রিয়া থাকতে পারে, অন্যদিকে হোমিওপ্যাথিক ঔষধে অতি সূক্ষ্ম মাত্রায় ঔষধ থাকে এবং কোন পার্শ্বপ্রতিক্রিয়া থাকে না।",
  },
];

export default function ServicesFaq() {
  const [activeItem, setActiveItem] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const assignFaqRef = (el: HTMLDivElement | null, index: number) => {
    if (el) faqRefs.current[index] = el;
  };

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

      // FAQ items staggered animation
      const faqItems = faqRefs.current.filter(item => item !== undefined);
      gsap.fromTo(
        faqItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
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
      className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            সাধারণ জিজ্ঞাসা
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
          </h2>
          <p className="text-lg text-gray-600">
            হোমিওপ্যাথিক চিকিৎসা সম্পর্কে আপনার যে কোন জিজ্ঞাসার উত্তর এখানে
            পাবেন
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                ref={el => assignFaqRef(el, index)}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:border-green-100"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span
                    className={`ml-4 flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center border border-green-500 transition-transform duration-300 ${
                      activeItem === index
                        ? "bg-green-500 text-white"
                        : "text-green-500"
                    }`}
                  >
                    <svg
                      className={`h-3 w-3 transition-transform duration-300 ${
                        activeItem === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          activeItem === index
                            ? "M5 15l7-7 7 7"
                            : "M19 9l-7 7-7-7"
                        }
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeItem === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
