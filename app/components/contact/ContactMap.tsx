"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkButton } from "@/app/components/ui/Button";

export default function ContactMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

      // Map animation
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 75%",
          },
        }
      );

      // Info animation
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoRef.current,
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
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            আমাদের ঠিকানা
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আমাদের লোকেশন
          </h2>
          <p className="text-lg text-gray-600">
            গণস্বাস্থ্য হোমিও ঢাকা শহরের মিরপুর এলাকায় অবস্থিত। আমাদের
            সুবিধাজনক অবস্থান আপনাকে সহজেই আমাদের খুঁজে পেতে সাহায্য করবে।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Map section */}
          <div
            ref={mapRef}
            className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg border border-gray-100 h-[400px] md:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284.4583398425048!2d90.41223393911194!3d23.7302298958373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9369d6de143%3A0xfd14ad962d4243c1!2sWazed%20ali%E2%80%99s%20Mansion!5e1!3m2!1sen!2sbd!4v1746621226054!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="গণস্বাস্থ্য হোমিও লোকেশন"
              className="filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Info section */}
          <div ref={infoRef} className="bg-green-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              যেভাবে আমাদের খুঁজে পাবেন
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">পূর্ণ ঠিকানা</h4>
                  <p className="text-gray-700 mt-1">
                    ১২৩, মিরপুর রোড, ঢাকা-১২১৬, বাংলাদেশ
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">ল্যান্ডমার্ক</h4>
                  <p className="text-gray-700 mt-1">
                    মিরপুর-১০ গোল চত্বর থেকে পশ্চিম দিকে ৩০০ মিটার
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">সময়সূচি</h4>
                  <p className="text-gray-700 mt-1">
                    শনি - বৃহস্পতি: সকাল ৯টা - রাত ৮টা
                    <br />
                    শুক্রবার: সকাল ১০টা - বিকেল ৫টা
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <LinkButton
                href="https://maps.google.com"
                target="_blank"
                variant="white"
                size="md"
                className="w-full justify-start"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                গুগল ম্যাপে রুট দেখুন
              </LinkButton>

              <LinkButton
                href="tel:+8801712345678"
                variant="primary"
                size="md"
                className="w-full justify-start"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                একটি কল করুন
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
