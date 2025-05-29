"use client";

import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  addDays,
  format,
  isSameDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  isBefore,
  getDay,
} from "date-fns";
import { bn } from "date-fns/locale";

// Custom styles for the calendar
const customStyles = {
  calendar: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    background: "#f3f4f6",
    padding: "1rem",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
  },
  day: {
    width: "40px",
    height: "40px",
    lineHeight: "40px",
    margin: "2px",
    borderRadius: "50%",
    fontSize: "0.875rem",
    fontWeight: "500",
  },
  selectedDay: {
    background: "#059669",
    color: "white",
    fontWeight: "600",
  },
  disabledDay: {
    background: "#f3f4f6",
    color: "#9ca3af",
    cursor: "not-allowed",
  },
  availableDay: {
    background: "white",
    color: "#1f2937",
    cursor: "pointer",
    "&:hover": {
      background: "#d1fae5",
    },
  },
};

type FormData = {
  location: string;
  selectedDate: Date | null;
};

const locations = [
  {
    id: 1,
    name: "ঢাকা",
    fullAddress: "১২/এ, পুরান পল্টন লেন, ঢাকা-১০০০",
    landmark: "পল্টন মার্কেট এর পাশে",
    contactNumber: "০১৭১২-৩৪৫৬৭৮",
    disabledDays: [2, 3, 4, 5], // Tuesday, Wednesday, Thursday, Friday (0 is Sunday)
  },
  {
    id: 2,
    name: "হবিগঞ্জ",
    fullAddress: "৪৫/বি, স্টেশন রোড, শায়েস্তাগঞ্জ, হবিগঞ্জ",
    landmark: "শায়েস্তাগঞ্জ রেলওয়ে স্টেশন এর সামনে",
    contactNumber: "০১৮১২-৩৪৫৬৭৮",
    disabledDays: [0, 1, 6, 5], // Saturday, Sunday, Monday, Friday (0 is Sunday)
  },
];

const LocationSelection = () => {
  const {
    setValue,
    watch,
    trigger,
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  const selectedLocation = watch("location");
  const selectedDate = watch("selectedDate");
  const [startDate] = useState<Date>(new Date()); // Today
  const [endDate] = useState<Date>(endOfMonth(addMonths(new Date(), 1))); // End of next month

  // Register the fields for validation
  register("location", { required: "অনুগ্রহ করে একটি লোকেশন নির্বাচন করুন" });
  register("selectedDate", {
    required: "অনুগ্রহ করে একটি তারিখ নির্বাচন করুন",
  });

  const handleLocationSelect = async (location: (typeof locations)[0]) => {
    setValue("location", location.name);
    setValue("selectedDate", null); // Reset selected date when location changes
    await trigger(["location", "selectedDate"]);
  };

  const handleDateSelect = async (date: Date | null) => {
    if (date) {
      setValue("selectedDate", date);
      await trigger("selectedDate");
    }
  };

  // Check if a date is available for the selected location
  const isDateAvailable = (date: Date) => {
    const location = locations.find(loc => loc.name === selectedLocation);
    if (!location) return false;

    // Don't allow past dates or current date
    if (isBefore(date, addDays(new Date(), 1))) return false;

    // Check if the day is disabled for this location
    const dayOfWeek = getDay(date);
    return !location.disabledDays.includes(dayOfWeek);
  };

  // Custom calendar day class
  const dayClassName = (date: Date) => {
    const isAvailable = isDateAvailable(date);
    const isSelected = selectedDate && isSameDay(date, selectedDate);

    return `calendar-day ${
      isAvailable
        ? "bg-white hover:bg-green-50 cursor-pointer"
        : "bg-gray-100 cursor-not-allowed"
    } ${isSelected ? "bg-green-500 text-white hover:bg-green-600" : ""}`;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        চেম্বার লোকেশন ও তারিখ নির্বাচন করুন
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
            </div>

            <div className="mt-4 space-y-2">
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
          </div>
        ))}
      </div>

      {selectedLocation && (
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            তারিখ নির্বাচন করুন <span className="text-red-500">*</span>
          </h3>
          <div className="bg-white p-6 rounded-xl">
            <style jsx global>{`
              .react-datepicker {
                font-family: inherit;
                border: 1px solid #e5e7eb;
                border-radius: 0.75rem;
                width: 100%;
                max-width: 350px;
                margin: 0 auto;
                box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
              }
              .react-datepicker__header {
                background-color: #f3f4f6;
                border-bottom: none;
                padding: 1rem;
                border-radius: 0.5rem;
                margin-bottom: 1rem;
              }
              .react-datepicker__current-month {
                font-size: 1.1rem;
                font-weight: 600;
                color: #1f2937;
                margin-bottom: 0.5rem;
              }
              .react-datepicker__day-name {
                color: #4b5563;
                font-weight: 500;
                width: 2.5rem;
                margin: 0.2rem;
              }
              .react-datepicker__day {
                width: 2.5rem;
                height: 2.5rem;
                line-height: 2.5rem;
                margin: 0.2rem;
                border-radius: 50%;
                font-size: 0.875rem;
                font-weight: 500;
              }
              .react-datepicker__day:hover {
                background-color: #d1fae5;
              }
              .react-datepicker__day--selected {
                background-color: #059669 !important;
                color: white !important;
                font-weight: 600;
              }
              .react-datepicker__day--disabled {
                color: #9ca3af;
                background-color: #f3f4f6;
                cursor: not-allowed;
              }
              .react-datepicker__navigation {
                top: 1rem;
              }
              .react-datepicker__navigation-icon::before {
                border-color: #4b5563;
                border-width: 2px 2px 0 0;
              }
              .react-datepicker__month-container {
                width: 100%;
              }
            `}</style>
            <div className="flex justify-center">
              <DatePicker
                key={selectedLocation}
                selected={selectedDate}
                onChange={handleDateSelect}
                inline
                locale={bn}
                minDate={startDate}
                maxDate={endDate}
                filterDate={isDateAvailable}
                dayClassName={dayClassName}
                calendarClassName="border-0"
                showMonthDropdown={false}
                showYearDropdown={false}
                renderCustomHeader={({
                  date,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                      className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <span className="text-lg font-semibold">
                      {format(date, "MMMM yyyy", { locale: bn })}
                    </span>
                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                      className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              />
            </div>
          </div>
          {errors.selectedDate && (
            <p className="text-red-500 text-sm mt-2">
              অনুগ্রহ করে একটি তারিখ নির্বাচন করুন
            </p>
          )}
        </div>
      )}

      {!selectedLocation && (
        <p className="text-red-500 text-sm mt-4">
          অনুগ্রহ করে একটি লোকেশন নির্বাচন করুন
        </p>
      )}

      {selectedLocation && selectedDate && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-lg font-medium text-blue-800 mb-2">
            নির্বাচিত তথ্য
          </h4>
          <p className="text-blue-700">{selectedLocation}</p>
          <p className="text-blue-600 text-sm mt-1">
            নির্বাচিত তারিখ:{" "}
            {format(selectedDate, "EEEE, d MMMM yyyy", { locale: bn })}
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationSelection;
