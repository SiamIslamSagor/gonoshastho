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
      question: "হোমিওপ্যাথি কীভাবে কাজ করে?",
      answer:
        "হোমিওপ্যাথি একটি চিকিৎসা পদ্ধতি যা 'সদৃশ দ্বারা সদৃশের চিকিৎসা' নীতিতে কাজ করে। অর্থাৎ, যে উপসর্গগুলি কোন সুস্থ মানুষের মধ্যে একটি পদার্থ সৃষ্টি করতে পারে, তা খুব ক্ষুদ্র মাত্রায় দেওয়া হয় একই উপসর্গযুক্ত রোগীর জন্য। এটি শরীরের নিজস্ব নিরাময় ক্ষমতাকে উদ্দীপিত করে।",
    },
    {
      question: "হোমিওপ্যাথি কি নিরাপদ?",
      answer:
        "হ্যাঁ, হোমিওপ্যাথি সাধারণত নিরাপদ। এটি খুব অল্প পরিমাণে প্রাকৃতিক উপাদান ব্যবহার করে এবং কোন পার্শ্বপ্রতিক্রিয়া নেই বললেই চলে। তবে, এটি বিশেষজ্ঞ হোমিওপ্যাথের পরামর্শ অনুযায়ী নেওয়া উচিত।",
    },
    {
      question: "হোমিওপ্যাথিক চিকিৎসার ফলাফল পেতে কতটা সময় লাগে?",
      answer:
        "এটি রোগের প্রকৃতি, তীব্রতা এবং রোগীর অবস্থার উপর নির্ভর করে। অ্যাকিউট রোগের ক্ষেত্রে কয়েক ঘন্টা বা দিনের মধ্যে ফলাফল দেখা যায়, কিন্তু ক্রনিক রোগের ক্ষেত্রে কয়েক সপ্তাহ বা মাস সময় লাগতে পারে।",
    },
    {
      question: "হোমিওপ্যাথিক ঔষধ কী খাওয়ার আগে না পরে খেতে হয়?",
      answer:
        "সাধারণত, হোমিওপ্যাথিক ঔষধ খাওয়ার ১৫-২০ মিনিট আগে বা পরে খাওয়া উচিত। খাবারের ঠিক আগে বা পরে খাওয়া এড়ানো উচিত। কফি, মেন্থল, ক্যাম্ফর ইত্যাদি সম্পর্কে সতর্ক থাকুন, কারণ এগুলি হোমিওপ্যাথিক ঔষধের কার্যকারিতা কমাতে পারে।",
    },
    {
      question: "আপনাদের এখানে কোন কোন রোগের চিকিৎসা করা হয়?",
      answer:
        "আমরা বিভিন্ন ধরনের রোগের চিকিৎসা করি যেমন: অ্যালার্জি, অ্যাজমা, চর্মরোগ, হজমের সমস্যা, মাইগ্রেন, উচ্চ রক্তচাপ, মানসিক সমস্যা, থাইরয়েড, ডায়াবেটিস, আর্থ্রাইটিস, সিনাসাইটিস, সাইনোসাইটিস, ইত্যাদি। অনুগ্রহ করে নির্দিষ্ট রোগের জন্য আমাদের সাথে যোগাযোগ করুন।",
    },
    {
      question: "আপনাদের এখানে কীভাবে অ্যাপয়েন্টমেন্ট নিতে হয়?",
      answer:
        "আপনি আমাদের ওয়েবসাইটের মাধ্যমে, ফোন করে, বা সরাসরি ক্লিনিকে এসে অ্যাপয়েন্টমেন্ট নিতে পারেন। অনলাইন কনসালটেশনের সুবিধাও রয়েছে। আমাদের যোগাযোগ নম্বর: ০১৭১২-৩৪৫৬৭৮।",
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
