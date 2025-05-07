import React from "react";
import { Metadata } from "next";
import ServicesHero from "@/app/components/services/ServicesHero";
import ServicesList from "@/app/components/services/ServicesList";
import ServicesFeatures from "@/app/components/services/ServicesFeatures";
import ServicesFaq from "@/app/components/services/ServicesFaq";
import ServicesContact from "@/app/components/services/ServicesContact";
import ServicesProcess from "@/app/components/services/ServicesProcess";

export const metadata: Metadata = {
  title: "সেবাসমূহ | গণস্বাস্থ্য হোমিও",
  description:
    "গণস্বাস্থ্য হোমিও'তে আমরা বিভিন্ন রোগের জন্য উন্নতমানের হোমিওপ্যাথিক চিকিৎসা সেবা প্রদান করি। আমাদের বিশেষায়িত চিকিৎসা সেবাসমূহ সম্পর্কে জানুন।",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesFeatures />
      <ServicesProcess />
      <ServicesFaq />
      <ServicesContact />
    </>
  );
}
