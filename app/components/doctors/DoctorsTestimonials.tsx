"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Patient testimonials specifically about doctors
const testimonials = [
  {
    id: 1,
    quote:
      "আমি দীর্ঘদিন ধরে থাইরয়েড সমস্যায় ভুগছিলাম। অনেক চিকিৎসা করেও কোন ফল পাচ্ছিলাম না। ডাঃ মাহমুদ হাসান স্যারের কাছে আসার পর মাত্র ৩ মাসের মধ্যে আমার শারীরিক অবস্থার অভূতপূর্ব উন্নতি হয়েছে।",
    patientName: "ফারহানা আক্তার",
    patientInfo: "থাইরয়েড রোগী, ৩৬ বছর",
    doctorName: "ডাঃ মাহমুদ হাসান",
    image: "/images/testimonials/patient-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "আমার ১০ বছরের মেয়ে মাসের পর মাস অ্যালার্জি এবং অ্যাজমায় ভুগছিল। ডাঃ শামীমা আক্তার ম্যাডামের চিকিৎসায় তার অবস্থা ৯০% ভালো হয়ে গেছে। ওনার বিশেষ পদ্ধতি এবং শিশুদের সাথে আচরণ করার ধরন অতুলনীয়।",
    patientName: "আবদুল করিম",
    patientInfo: "অভিভাবক, ৪২ বছর",
    doctorName: "ডাঃ শামীমা আক্তার",
    image: "/images/testimonials/patient-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "আমি প্রায় ১৫ বছর ধরে পসোরিয়াসিসে ভুগছিলাম। অনেক ব্যয়বহুল চিকিৎসা করেও স্থায়ী সমাধান পাইনি। ডাঃ ফারিহা রহমান এর কাছে যাওয়ার ৬ মাস পর থেকে আমার ত্বকের অবস্থা দিন দিন উন্নতি হচ্ছে। এখন প্রায় ৮০% সেরে গেছে।",
    patientName: "সাদিয়া জাহান",
    patientInfo: "ত্বকের রোগী, ৪৫ বছর",
    doctorName: "ডাঃ ফারিহা রহমান",
    image: "/images/testimonials/patient-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "দীর্ঘদিন ধরে আমি মাইগ্রেন এবং প্যানিক অ্যাটাকে ভুগছিলাম। অনেক ঔষধ খেয়েও কোন ফল পাইনি। ডাঃ নাজমুল হাসান এর হোমিওপ্যাথিক চিকিৎসায় আমি প্রথমবারের মতো দীর্ঘদিন ধরে কোন অ্যাটাক ছাড়াই আছি।",
    patientName: "রাকিব হাসান",
    patientInfo: "মাইগ্রেন রোগী, ৩৮ বছর",
    doctorName: "ডাঃ নাজমুল হাসান",
    image: "/images/testimonials/patient-4.jpg",
    rating: 4,
  },
  {
    id: 5,
    quote:
      "আমি ডায়াবেটিস এবং উচ্চ রক্তচাপ নিয়ে দীর্ঘদিন ভুগছিলাম। ডাঃ আবদুল্লাহ খান স্যারের পদ্ধতিগত চিকিৎসায় আমার রক্তে শর্করার মাত্রা নিয়ন্ত্রণে এসেছে এবং রক্তচাপও স্বাভাবিক হয়েছে।",
    patientName: "জাহিদুল ইসলাম",
    patientInfo: "ডায়াবেটিস রোগী, ৫২ বছর",
    doctorName: "ডাঃ আবদুল্লাহ খান",
    image: "/images/testimonials/patient-5.jpg",
    rating: 5,
  },
];

export default function DoctorsTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isPaused) {
      intervalId = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }

    return () => clearInterval(intervalId);
  }, [isPaused, activeIndex]);

  // GSAP animations
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

      // Carousel animation
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Testimonial change animation
  useEffect(() => {
    const testimonialsItems = document.querySelectorAll(".testimonial-item");

    gsap.fromTo(
      testimonialsItems[activeIndex],
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power1.out" }
    );
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-green-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            সফল রোগীদের অভিজ্ঞতা
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আমাদের চিকিৎসকদের সম্পর্কে রোগীদের মতামত
          </h2>
          <p className="text-lg text-gray-600">
            গণস্বাস্থ্য হোমিও'তে চিকিৎসা নেওয়া রোগীদের অভিজ্ঞতা থেকে জানুন
            আমাদের চিকিৎসকদের সম্পর্কে
          </p>
        </div>

        {/* Testimonial carousel */}
        <div
          ref={carouselRef}
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonials container */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-item transition-opacity duration-500 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <div className="grid md:grid-cols-5 items-stretch">
                  {/* Left image section - 2 columns on md+ */}
                  <div className="md:col-span-2 relative min-h-[300px] md:min-h-full bg-green-600">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-700/20 to-green-900/70 z-10"></div>
                    {testimonial.image.startsWith("/images") ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <svg
                            className="h-16 w-16 text-white"
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
                    ) : (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.patientName}
                        fill
                        className="object-cover"
                      />
                    )}

                    {/* Patient info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-400"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold">
                        {testimonial.patientName}
                      </h3>
                      <p className="text-green-100">
                        {testimonial.patientInfo}
                      </p>
                    </div>
                  </div>

                  {/* Right content section - 3 columns on md+ */}
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                    <svg
                      className="h-10 w-10 text-green-200 mb-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="mt-auto">
                      <div className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        চিকিৎসক: {testimonial.doctorName}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-green-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-green-600 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-green-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
