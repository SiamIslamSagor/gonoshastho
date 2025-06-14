"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AppointmentPageContent from "@/app/components/appointment/AppointmentPageContent";

export default function AppointmentPage() {
  const searchParams = useSearchParams();
  const [initialData, setInitialData] = useState({
    symptoms: "",
  });

  useEffect(() => {
    // Get symptom from URL if present
    const symptom = searchParams.get("symptom");
    if (symptom) {
      setInitialData({
        symptoms: decodeURIComponent(symptom),
      });
    }
  }, [searchParams]);

  return <AppointmentPageContent initialData={initialData} />;
}
