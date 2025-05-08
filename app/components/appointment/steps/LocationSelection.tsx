"use client";

import React from "react";

type FormData = {
  location: string;
  specificLocation: string;
  availableDays: string[];
};

interface LocationSelectionProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const locations = [
  {
    id: "dhaka",
    name: "ঢাকা",
    specificLocation: "পুরান পল্টন",
    fullAddress: "১২৩/এ, পুরান পল্টন লেন, ঢাকা-১০০০",
    availableDays: ["শনিবার", "রবিবার", "সোমবার"],
    contactNumber: "০১৭১২-৩৪৫৬৭৮",
    landmark: "পুরান পল্টন মার্কেটের পাশে",
  },
  {
    id: "hobiganj",
    name: "হবিগঞ্জ",
    specificLocation: "শায়েস্তাগঞ্জ",
    fullAddress: "৪৫/বি, মেইন রোড, শায়েস্তাগঞ্জ, হবিগঞ্জ",
    availableDays: ["মঙ্গলবার", "বুধবার", "বৃহস্পতিবার"],
    contactNumber: "০১৮১২-৩৪৫৬৭৮",
    landmark: "শায়েস্তাগঞ্জ বাজারের সামনে",
  },
];

const LocationSelection: React.FC<LocationSelectionProps> = ({
  formData,
  updateFormData,
}) => {
  const handleLocationSelect = (location: (typeof locations)[0]) => {
    updateFormData({
      location: location.name,
      specificLocation: location.specificLocation,
      availableDays: location.availableDays,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        চেম্বার লোকেশন নির্বাচন করুন
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map(location => (
          <div
            key={location.id}
            className={`p-6 border rounded-xl cursor-pointer transition-all ${
              formData.location === location.name
                ? "border-green-500 bg-green-50"
                : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
            }`}
            onClick={() => handleLocationSelect(location)}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {location.name}
                </h3>
                <p className="text-green-600 font-medium">
                  {location.specificLocation}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">ঠিকানা:</span>{" "}
                  {location.fullAddress}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">ল্যান্ডমার্ক:</span>{" "}
                  {location.landmark}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">যোগাযোগ:</span>{" "}
                  {location.contactNumber}
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-900 mb-2">চেম্বার দিনঃ</p>
                <div className="flex flex-wrap gap-2">
                  {location.availableDays.map(day => (
                    <span
                      key={day}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {formData.location && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-lg font-medium text-blue-800 mb-2">
            নির্বাচিত লোকেশন
          </h4>
          <p className="text-blue-700">
            {formData.location} - {formData.specificLocation}
          </p>
          <p className="text-blue-600 text-sm mt-1">
            চেম্বার দিনঃ {formData.availableDays?.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationSelection;
