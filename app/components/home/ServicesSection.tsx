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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "পরীক্ষা-নিরীক্ষা",
    description:
      "আমরা রোগ নির্ণয়ের জন্য আধুনিক পদ্ধতিতে বিভিন্ন ধরনের টেস্ট এবং পরীক্ষা-নিরীক্ষা করি।",
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
  },
];

const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header animation
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

      // Staggered card animations
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          },
        }
      );

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
          },
        }
      );

      // Hover animations - will be handled by React state
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Dynamic animation when hovering
  useEffect(() => {
    if (hoveredId !== null) {
      gsap.to(`.service-card-${hoveredId} .service-icon`, {
        rotateY: 360,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, [hoveredId]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আমাদের সেবাসমূহ
          </h2>
          <p className="text-lg text-gray-600">
            গণস্বাস্থ্য হোমিও'তে আমরা বিভিন্ন রোগের জন্য উন্নতমানের চিকিৎসা সেবা
            প্রদান করি। আমাদের বিশেষায়িত সেবাসমূহ নিম্নরূপ।
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map(service => (
            <div
              key={service.id}
              className={`service-card service-card-${service.id} bg-white rounded-xl overflow-hidden transition-all duration-300 border border-gray-100 hover:shadow-xl hover:border-green-100 group`}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-8">
                <div
                  className={`service-icon w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-green-600 bg-green-50 group-hover:bg-green-600 group-hover:text-white transition-all duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  <span>আরও জানুন</span>
                  <svg
                    className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                      hoveredId === service.id ? "transform translate-x-1" : ""
                    }`}
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
          ))}
        </div>

        <div ref={buttonRef} className="text-center mt-12">
          <LinkButton
            href="/services"
            variant="primary"
            size="md"
            className="transform hover:scale-105 duration-300"
          >
            <span>সকল সেবা দেখুন</span>
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
