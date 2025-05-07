import React from "react";

type FormData = {
  symptoms: string;
  previousTreatments: string;
  currentMedications: string;
  allergies: string;
};

interface MedicalHistoryProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const MedicalHistory: React.FC<MedicalHistoryProps> = ({
  formData,
  updateFormData,
}) => {
  const textareaClasses =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        মেডিকেল হিস্টরি
      </h2>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="symptoms"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            রোগের লক্ষণ
          </label>
          <textarea
            id="symptoms"
            value={formData.symptoms}
            onChange={e => updateFormData({ symptoms: e.target.value })}
            rows={4}
            className={textareaClasses}
            placeholder="আপনার রোগের লক্ষণগুলি বিস্তারিত লিখুন"
            required
          />
        </div>

        <div>
          <label
            htmlFor="previousTreatments"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            পূর্ববর্তী চিকিৎসা
          </label>
          <textarea
            id="previousTreatments"
            value={formData.previousTreatments}
            onChange={e =>
              updateFormData({ previousTreatments: e.target.value })
            }
            rows={3}
            className={textareaClasses}
            placeholder="আপনি কি কোনো চিকিৎসা নিয়েছেন? থাকলে বিস্তারিত লিখুন"
          />
        </div>

        <div>
          <label
            htmlFor="currentMedications"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            বর্তমান ঔষধ
          </label>
          <textarea
            id="currentMedications"
            value={formData.currentMedications}
            onChange={e =>
              updateFormData({ currentMedications: e.target.value })
            }
            rows={3}
            className={textareaClasses}
            placeholder="বর্তমানে কোন ঔষধ খাচ্ছেন? থাকলে তার নাম লিখুন"
          />
        </div>

        <div>
          <label
            htmlFor="allergies"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            এলার্জি
          </label>
          <textarea
            id="allergies"
            value={formData.allergies}
            onChange={e => updateFormData({ allergies: e.target.value })}
            rows={2}
            className={textareaClasses}
            placeholder="আপনার কোনো এলার্জি আছে? থাকলে লিখুন"
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
