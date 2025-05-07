"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays, setHours, setMinutes, isSameDay } from "date-fns";
import { bn } from "date-fns/locale";

type FormData = {
  appointmentDate: string;
  appointmentTime: string;
};

interface DateTimeSelectionProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const timeSlots = [
  { time: "09:00 AM", hours: 9, minutes: 0 },
  { time: "09:30 AM", hours: 9, minutes: 30 },
  { time: "10:00 AM", hours: 10, minutes: 0 },
  { time: "10:30 AM", hours: 10, minutes: 30 },
  { time: "11:00 AM", hours: 11, minutes: 0 },
  { time: "11:30 AM", hours: 11, minutes: 30 },
  { time: "12:00 PM", hours: 12, minutes: 0 },
  { time: "03:00 PM", hours: 15, minutes: 0 },
  { time: "03:30 PM", hours: 15, minutes: 30 },
  { time: "04:00 PM", hours: 16, minutes: 0 },
  { time: "04:30 PM", hours: 16, minutes: 30 },
  { time: "05:00 PM", hours: 17, minutes: 0 },
  { time: "05:30 PM", hours: 17, minutes: 30 },
];

const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
  formData,
  updateFormData,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    formData.appointmentDate ? new Date(formData.appointmentDate) : null
  );

  // Filter available times (example: no past times for today)
  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    if (isSameDay(currentDate, selectedDate)) {
      return currentDate.getTime() < selectedDate.getTime();
    }

    return true;
  };

  // Generate available time slots
  const getAvailableTimeSlots = (date: Date) => {
    return timeSlots.map(({ hours, minutes }) => {
      const timeSlot = setMinutes(setHours(date, hours), minutes);
      return timeSlot;
    });
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      updateFormData({
        appointmentDate: date.toISOString(),
        appointmentTime: "", // Reset time when date changes
      });
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        তারিখ এবং সময় নির্বাচন করুন
      </h2>

      {/* Date Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          তারিখ নির্বাচন করুন
        </h3>
        <div className="w-full max-w-md">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            maxDate={addDays(new Date(), 30)}
            dateFormat="dd/MM/yyyy"
            locale={bn}
            inline
            calendarClassName="!bg-white !border-gray-200 !rounded-lg !shadow-lg !font-bangla"
            dayClassName={date =>
              `!text-sm hover:!bg-green-50 
              ${
                isSameDay(date, new Date()) ? "!text-green-500 !font-bold" : ""
              }`
            }
          />
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            সময় নির্বাচন করুন
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {timeSlots.map(({ time, hours, minutes }) => {
              const timeSlot = setMinutes(
                setHours(new Date(selectedDate), hours),
                minutes
              );
              const isAvailable = filterPassedTime(timeSlot);

              return (
                <button
                  key={time}
                  onClick={() => updateFormData({ appointmentTime: time })}
                  disabled={!isAvailable}
                  className={`p-3 rounded-lg text-center transition-all ${
                    formData.appointmentTime === time
                      ? "bg-green-500 text-white"
                      : isAvailable
                      ? "bg-white border border-gray-200 hover:border-green-500 hover:bg-green-50"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <span className="text-sm font-medium">{time}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Date & Time Summary */}
      {formData.appointmentDate && formData.appointmentTime && (
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <h4 className="text-lg font-medium text-green-800 mb-2">
            আপনার নির্বাচিত সময়
          </h4>
          <p className="text-green-700">
            {format(new Date(formData.appointmentDate), "dd MMMM, yyyy")} -{" "}
            {formData.appointmentTime}
          </p>
        </div>
      )}
    </div>
  );
};

export default DateTimeSelection;
