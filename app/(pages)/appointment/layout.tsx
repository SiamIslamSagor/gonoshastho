import { Metadata } from "next";

export const metadata: Metadata = {
  title: "অ্যাপয়েন্টমেন্ট | গণস্বাস্থ্য হোমিও",
  description:
    "আমাদের অভিজ্ঞ হোমিওপ্যাথিক চিকিৎসকদের সাথে অ্যাপয়েন্টমেন্ট বুক করুন",
};

export default function AppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
