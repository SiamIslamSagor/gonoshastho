import React from "react";
import { Metadata } from "next";
import ContactHero from "@/app/components/contact/ContactHero";
import ContactInfo from "@/app/components/contact/ContactInfo";
import ContactForm from "@/app/components/contact/ContactForm";
import ContactMap from "@/app/components/contact/ContactMap";
import ContactFAQ from "@/app/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "যোগাযোগ | গণস্বাস্থ্য হোমিও",
  description:
    "গণস্বাস্থ্য হোমিও'র সাথে যোগাযোগ করুন। আমাদের ঠিকানা, ফোন নম্বর, ইমেইল এবং অনলাইন ফর্ম দিয়ে আমাদের সাথে সরাসরি যোগাযোগ করতে পারেন।",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactFAQ />
    </>
  );
}
