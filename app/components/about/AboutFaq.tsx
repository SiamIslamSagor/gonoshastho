"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { LinkButton } from "@/app/components/ui/Button";

export default function AboutFaq() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(0);

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

  const toggleItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "ক্যান্সার কি হোমিওপ্যাথিতে চিকিৎসাযোগ্য?",
      answer:
        "হ্যাঁ, হোমিওপ্যাথি ক্যান্সারের চিকিৎসায় সহায়ক হতে পারে। বিশেষ করে প্রাথমিক ও মধ্য পর্যায়ে এটি রোগ প্রতিরোধ ক্ষমতা বাড়াতে, উপসর্গ নিয়ন্ত্রণে রাখতে এবং মানসিকভাবে রোগীকে শক্ত রাখতে কার্যকর।",
    },
    {
      question: "ক্যান্সার হলে হোমিও চিকিৎসা কখন শুরু করা উচিত?",
      answer:
        "যত দ্রুত সম্ভব। প্রথম পর্যায়েই হোমিওপ্যাথি শুরু করলে রোগ নিয়ন্ত্রণ, ব্যথা হ্রাস ও মানসিক শান্তিতে বড় ভূমিকা রাখতে পারে।",
    },
    {
      question: "হোমিওপ্যাথির কোনো পার্শ্বপ্রতিক্রিয়া আছে কি?",
      answer:
        "না, নেই। হোমিওপ্যাথিক ওষুধ প্রাকৃতিক উপাদানে তৈরি এবং পার্শ্বপ্রতিক্রিয়াহীন। তবে রোগীর অবস্থা অনুযায়ী চিকিৎসক পরামর্শে গ্রহণ করাই উত্তম।",
    },
    {
      question: "হোমিওপ্যাথি কি কেমোথেরাপির বিকল্প হতে পারে?",
      answer:
        "হোমিওপ্যাথি কেমোর বিকল্প নয়, কিন্তু সম্পূরক সহায়ক হতে পারে। বিশেষ করে কেমোথেরাপির পার্শ্বপ্রতিক্রিয়া কমাতে ও শরীরকে পুনর্গঠনে এটি উল্লেখযোগ্যভাবে সাহায্য করে।",
    },
    {
      question: "হোমিওপ্যাথি ক্যান্সার সারিয়ে তোলে কি?",
      answer:
        "রোগ সম্পূর্ণ নিরাময়ের প্রতিশ্রুতি না দিলেও, হোমিওপ্যাথি ক্যান্সার নিয়ন্ত্রণ, জীবনমান উন্নয়ন ও দীর্ঘস্থায়ী স্বস্তি দিতে সাহায্য করতে পারে।",
    },
    {
      question: "গণস্বাস্থ্য হোমিওর ওষুধ কোথা থেকে আনা হয়?",
      answer:
        "আমাদের সমস্ত হোমিওপ্যাথিক ওষুধ জার্মানি থেকে আমদানি করা হয়। জার্মান হোমিও মেডিসিন বিশ্বমানের এবং আন্তর্জাতিকভাবে স্বীকৃত, যা আমাদের রোগীদের জন্য নিরাপদ ও কার্যকর চিকিৎসা নিশ্চিত করে।",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-green-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-56 h-56 rounded-full bg-green-200/30 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-green-200/20 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4">
            <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              সাধারণ জিজ্ঞাসা
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">প্রশ্ন</span> উত্তর
          </h2>
          <p className="text-lg text-gray-700">
            আমাদের কাছে প্রায়শই জিজ্ঞাসিত বিভিন্ন প্রশ্নের উত্তর জানতে নিচে
            দেখুন। আরও জানতে চাইলে আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-green-600 transform transition-transform duration-300 ${
                      activeItem === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeItem === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 border-t border-gray-100">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              আরও প্রশ্ন আছে? আমাদের সাথে যোগাযোগ করুন
            </p>
            <LinkButton href="/contact" variant="primary">
              যোগাযোগ করুন
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
