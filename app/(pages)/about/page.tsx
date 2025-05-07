import React from "react";
import { Metadata } from "next";
import AboutHero from "@/app/components/about/AboutHero";
import AboutMission from "@/app/components/about/AboutMission";
import AboutTeam from "@/app/components/about/AboutTeam";
import AboutHistory from "@/app/components/about/AboutHistory";
import AboutFaq from "@/app/components/about/AboutFaq";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | গণস্বাস্থ্য হোমিও",
  description:
    "গণস্বাস্থ্য হোমিও - আমাদের উদ্দেশ্য, দর্শন এবং ইতিহাস সম্পর্কে জানুন। ১৯৯৮ সাল থেকে মানসম্মত হোমিওপ্যাথিক চিকিৎসা সেবা প্রদান করে আসছি।",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutHistory />
      <AboutTeam />
      <AboutFaq />
    </>
  );
}
