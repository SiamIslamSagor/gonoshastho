"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import PatientInfo from "./steps/PatientInfo";
import MedicalHistory from "./steps/MedicalHistory";
import DoctorSelection from "./steps/DoctorSelection";
import DateTimeSelection from "./steps/DateTimeSelection";
import ReviewConfirm from "./steps/ReviewConfirm";

const steps = [
  { id: 1, title: "রোগীর তথ্য", subtitle: "Personal Information" },
  { id: 2, title: "মেডিকেল হিস্টরি", subtitle: "Medical History" },
  { id: 3, title: "ডাক্তার নির্বাচন", subtitle: "Select Doctor" },
  { id: 4, title: "সময় নির্বাচন", subtitle: "Choose Date & Time" },
  { id: 5, title: "নিশ্চিত করুন", subtitle: "Review & Confirm" },
];

const AppointmentForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Patient Info
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",

    // Medical History
    symptoms: "",
    previousTreatments: "",
    currentMedications: "",
    allergies: "",

    // Doctor Selection
    selectedDoctor: "",

    // Date & Time
    appointmentDate: "",
    appointmentTime: "",
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return; // Prevent multiple submissions

    try {
      setIsSubmitting(true);

      // Log the form data
      console.log("Appointment Booking Data:", formData);

      // Here you would typically make an API call to save the data
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Show success modal
      setShowSuccessModal(true);

      // Show toast notification
      toast.success("অ্যাপয়েন্টমেন্ট সফলভাবে বুক করা হয়েছে!", {
        duration: 5000,
        position: "top-center",
      });

      // Wait for 2 seconds before redirecting
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      toast.error("দুঃখিত, কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।", {
        duration: 5000,
      });
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PatientInfo formData={formData} updateFormData={updateFormData} />
        );
      case 2:
        return (
          <MedicalHistory formData={formData} updateFormData={updateFormData} />
        );
      case 3:
        return (
          <DoctorSelection
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return (
          <DateTimeSelection
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 5:
        return <ReviewConfirm formData={formData} />;
      default:
        return null;
    }
  };

  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map(step => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  currentStep === step.id
                    ? "text-green-600"
                    : currentStep > step.id
                    ? "text-green-400"
                    : "text-gray-300"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                    currentStep === step.id
                      ? "bg-green-600 text-white"
                      : currentStep > step.id
                      ? "bg-green-400 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {step.id}
                </div>
                <div className="text-sm font-medium hidden md:block">
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 hidden md:block">
                  {step.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1 || isSubmitting}
            className={`px-6 py-2 rounded-lg font-medium ${
              currentStep === 1 || isSubmitting
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Previous
          </button>
          <button
            onClick={currentStep === steps.length ? handleSubmit : handleNext}
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed flex items-center gap-2 min-w-[100px] justify-center`}
          >
            {currentStep === steps.length ? (
              isSubmitting ? (
                <>
                  <LoadingSpinner />
                  <span>Processing...</span>
                </>
              ) : (
                "Confirm Booking"
              )
            ) : (
              "Next"
            )}
          </button>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-xl p-6 md:p-8 max-w-md mx-4 relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  অ্যাপয়েন্টমেন্ট নিশ্চিত হয়েছে!
                </h3>
                <p className="text-gray-600 mb-6">
                  আপনার অ্যাপয়েন্টমেন্ট সফলভাবে বুক করা হয়েছে। আমরা শীঘ্রই
                  আপনার সাথে যোগাযোগ করব।
                </p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  ঠিক আছে
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Container */}
      <Toaster />
    </>
  );
};

export default AppointmentForm;
