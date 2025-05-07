"use client";

import { useState } from "react";
import Link from "next/link";

// Sample doctors data
const doctors = [
  {
    id: 1,
    name: "ডাঃ মাহমুদ হাসান",
    title: "প্রধান চিকিৎসক এবং পরিচালক",
    specialization: "৩০+ বছরের অভিজ্ঞতা সম্পন্ন হোমিওপ্যাথিক চিকিৎসক",
    image: "/doctors/placeholder-doctor.png", // Will use placeholder for now
  },
  {
    id: 2,
    name: "ডাঃ শামীমা আক্তার",
    title: "সিনিয়র চিকিৎসক",
    specialization: "২৫+ বছরের অভিজ্ঞতা, মহিলা ও শিশু রোগ বিশেষজ্ঞ",
    image: "/doctors/placeholder-doctor.png",
  },
  {
    id: 3,
    name: "ডাঃ আবদুল্লাহ খান",
    title: "সিনিয়র কনসালটেন্ট",
    specialization: "২০+ বছরের অভিজ্ঞতা, দীর্ঘমেয়াদী রোগ বিশেষজ্ঞ",
    image: "/doctors/placeholder-doctor.png",
  },
  {
    id: 4,
    name: "ডাঃ ফারিহা রহমান",
    title: "কনসালটেন্ট",
    specialization: "১৫+ বছরের অভিজ্ঞতা, ত্বক ও এলার্জি বিশেষজ্ঞ",
    image: "/doctors/placeholder-doctor.png",
  },
];

const DoctorsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আমাদের অভিজ্ঞ চিকিৎসকগণ
          </h2>
          <p className="text-lg text-gray-600">
            গণস্বাস্থ্য হোমিও'তে দেশের সেরা এবং অভিজ্ঞ হোমিওপ্যাথিক চিকিৎসকদের
            দল রয়েছে যারা আপনার সম্পূর্ণ আরোগ্যের জন্য নিবেদিত।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map(doctor => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 border border-gray-100 hover:shadow-xl group"
              onMouseEnter={() => setHoveredId(doctor.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Doctor Image */}
              <div className="relative h-80 w-full bg-green-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-green-600 rounded-full flex items-center justify-center text-white">
                      <svg
                        className="h-16 w-16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {doctor.title}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {doctor.specialization}
                </p>
                <div
                  className={`transition-all duration-300 ${
                    hoveredId === doctor.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <Link
                    href={`/doctors/${doctor.id}`}
                    className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    <span>বিস্তারিত দেখুন</span>
                    <svg
                      className="ml-2 w-5 h-5"
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

        <div className="text-center mt-12">
          <Link
            href="/doctors"
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            <span>সকল চিকিৎসক দেখুন</span>
            <svg
              className="ml-2 w-5 h-5"
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
    </section>
  );
};

export default DoctorsSection;
