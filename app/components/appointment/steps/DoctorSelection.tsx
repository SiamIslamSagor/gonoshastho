import React from "react";
import Image from "next/image";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
  availability: string[];
}

type FormData = {
  selectedDoctor: string;
};

const doctors: Doctor[] = [
  {
    id: "1",
    name: "ডাঃ আব্দুল করিম",
    specialization: "হোমিওপ্যাথি বিশেষজ্ঞ",
    experience: "২৫+ বছরের অভিজ্ঞতা",
    image: "/images/doctors/doctor-1.jpg",
    availability: ["রবিবার", "মঙ্গলবার", "বৃহস্পতিবার"],
  },
  {
    id: "2",
    name: "ডাঃ সালমা বেগম",
    specialization: "হোমিওপ্যাথি চিকিৎসক",
    experience: "১৫+ বছরের অভিজ্ঞতা",
    image: "/images/doctors/doctor-2.jpg",
    availability: ["সোমবার", "বুধবার", "শনিবার"],
  },
  {
    id: "3",
    name: "ডাঃ রফিকুল ইসলাম",
    specialization: "হোমিওপ্যাথি বিশেষজ্ঞ",
    experience: "২০+ বছরের অভিজ্ঞতা",
    image: "/images/doctors/doctor-3.jpg",
    availability: ["রবিবার", "মঙ্গলবার", "শুক্রবার"],
  },
  {
    id: "4",
    name: "ডাঃ নাসরিন আক্তার",
    specialization: "হোমিওপ্যাথি চিকিৎসক",
    experience: "১০+ বছরের অভিজ্ঞতা",
    image: "/images/doctors/doctor-4.jpg",
    availability: ["সোমবার", "বৃহস্পতিবার", "শনিবার"],
  },
];

interface DoctorSelectionProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const DoctorSelection: React.FC<DoctorSelectionProps> = ({
  formData,
  updateFormData,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        ডাক্তার নির্বাচন করুন
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map(doctor => (
          <div
            key={doctor.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              formData.selectedDoctor === doctor.id
                ? "border-green-500 bg-green-50"
                : "border-gray-200 hover:border-green-300"
            }`}
            onClick={() => updateFormData({ selectedDoctor: doctor.id })}
          >
            <div className="flex items-start space-x-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600">{doctor.specialization}</p>
                <p className="text-sm text-gray-600">{doctor.experience}</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-700">
                    চেম্বার দিনঃ
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {doctor.availability.map(day => (
                      <span
                        key={day}
                        className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSelection;
