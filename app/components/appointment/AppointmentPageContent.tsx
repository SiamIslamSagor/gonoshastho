"use client";

import React, { useState, useEffect } from "react";
import AppointmentForm from "@/app/components/appointment/AppointmentForm";
import gsap from "gsap";

export default function AppointmentPageContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after a small delay to ensure components render first
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // GSAP animation for the header section
  useEffect(() => {
    if (isLoaded) {
      const tl = gsap.timeline();

      tl.fromTo(
        ".appointment-header h1",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      tl.fromTo(
        ".appointment-header p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

      tl.fromTo(
        ".appointment-form-container",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
    }
  }, [isLoaded]);

  return (
    <main className="relative min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-12 appointment-header ${
            isLoaded ? "gsap-init-visible" : "gsap-init-invisible"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            অ্যাপয়েন্টমেন্ট <span className="text-green-600">বুক করুন</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            আমাদের অভিজ্ঞ হোমিওপ্যাথিক চিকিৎসকদের সাথে অ্যাপয়েন্টমেন্ট বুক করতে
            নিচের ফর্মটি পূরণ করুন
          </p>
        </div>

        {/* Appointment Form Component */}
        <div
          className={`appointment-form-container ${
            isLoaded ? "gsap-init-visible" : "gsap-init-invisible"
          }`}
        >
          <AppointmentForm />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-green-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-100/20 blur-3xl"></div>

      {/* Decorative elements */}
      <div className="absolute top-[15%] right-[10%] w-12 h-12 bg-gradient-to-b from-green-300/20 to-transparent rounded-full animate-float"></div>
      <div className="absolute bottom-[20%] left-[15%] w-8 h-8 bg-gradient-to-b from-green-400/20 to-transparent rounded-full animate-float delay-300"></div>

      {/* Circular Elements */}
      <div className="absolute top-[25%] left-[5%] w-24 h-24">
        <div className="absolute inset-0 rounded-full border-2 border-green-300/30 animate-spin-slow"></div>
        <div className="absolute inset-[20%] rounded-full border border-green-200/20 animate-spin-slow-reverse"></div>
      </div>
    </main>
  );
}
