import React from "react";
import { Metadata } from "next";
import DoctorsHero from "@/app/components/doctors/DoctorsHero";
import DoctorsList from "@/app/components/doctors/DoctorsList";
import DoctorsSpecialties from "@/app/components/doctors/DoctorsSpecialties";
import DoctorsTestimonials from "@/app/components/doctors/DoctorsTestimonials";
import DoctorsAppointment from "@/app/components/doctors/DoctorsAppointment";

export const metadata: Metadata = {
  title: "ডাক্তারগণ | গণস্বাস্থ্য হোমিও",
  description:
    "গণস্বাস্থ্য হোমিও'তে আমাদের অভিজ্ঞ হোমিওপ্যাথিক চিকিৎসকদের সাথে পরিচিত হোন। বিশেষজ্ঞ চিকিৎসকরা আপনার স্বাস্থ্য সমস্যার সমাধানে নিবেদিত।",
};

export default function DoctorsPage() {
  return (
    <>
      <DoctorsHero />
      <DoctorsList />
      <DoctorsSpecialties />
      <DoctorsTestimonials />
      <DoctorsAppointment />
    </>
  );
}
