import React from "react";
import { Metadata } from "next";
import AppointmentPageContent from "@/app/components/appointment/AppointmentPageContent";

export const metadata: Metadata = {
  title: "অ্যাপয়েন্টমেন্ট | গণস্বাস্থ্য হোমিও",
  description:
    "আমাদের অভিজ্ঞ হোমিওপ্যাথিক চিকিৎসকদের সাথে অ্যাপয়েন্টমেন্ট বুক করুন",
};

export default function AppointmentPage() {
  return <AppointmentPageContent />;
}
