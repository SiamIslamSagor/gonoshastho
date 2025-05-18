"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

type FormData = {
  location: string;
  specificLocation: string;
  availableDays: string[];
};

const locations = [
  {
    id: 1,
    name: "ঢাকা",
    specificLocation: "পুরান পল্টন",
    fullAddress: "১২/এ, পুরান পল্টন লেন, ঢাকা-১০০০",
    landmark: "পল্টন মার্কেট এর পাশে",
    contactNumber: "০১৭১২-৩৪৫৬৭৮",
    availableDays: ["শনিবার", "রবিবার", "সোমবার"],
  },
  {
    id: 2,
    name: "হবিগঞ্জ",
    specificLocation: "শায়েস্তাগঞ্জ",
    fullAddress: "৪৫/বি, স্টেশন রোড, শায়েস্তাগঞ্জ, হবিগঞ্জ",
    landmark: "শায়েস্তাগঞ্জ রেলওয়ে স্টেশন এর সামনে",
    contactNumber: "০১৮১২-৩৪৫৬৭৮",
    availableDays: ["মঙ্গলবার", "বুধবার", "বৃহস্পতিবার"],
  },
];

const LocationSelection = () => {
  const {
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext<FormData>();

  const selectedLocation = watch("location");

  const handleLocationSelect = async (location: (typeof locations)[0]) => {
    setValue("location", location.name);
    setValue("specificLocation", location.specificLocation);
    setValue("availableDays", location.availableDays);

    // Trigger validation after setting values
    await trigger(["location", "specificLocation", "availableDays"]);
  };

  // Check if the selected location exists in our locations array
  const isValidLocation =
    selectedLocation && locations.some(loc => loc.name === selectedLocation);

  React.useEffect(() => {
    // Register location field with validation
    setValue("location", selectedLocation || "", {
      shouldValidate: true,
      shouldDirty: true,
    });
  }, [setValue, selectedLocation]);

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
              selectedLocation === location.name
                ? "border-green-500 bg-green-50"
                : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
            }`}
            onClick={() => handleLocationSelect(location)}
          >
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
        ))}
      </div>

      {!isValidLocation && (
        <p className="text-red-500 text-sm mt-4">
          অনুগ্রহ করে একটি লোকেশন নির্বাচন করুন
        </p>
      )}

      {selectedLocation && isValidLocation && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-lg font-medium text-blue-800 mb-2">
            নির্বাচিত লোকেশন
          </h4>
          <p className="text-blue-700">
            {selectedLocation} - {watch("specificLocation")}
          </p>
          <p className="text-blue-600 text-sm mt-1">
            চেম্বার দিনঃ {watch("availableDays")?.join(", ")}
          </p>
        </div>
      )}

      {/* Hidden input for form validation */}
      <input
        type="hidden"
        name="location"
        value={selectedLocation || ""}
        onChange={() => {}}
      />
    </div>
  );
};

export default LocationSelection;
