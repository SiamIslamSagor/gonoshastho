import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type FormData = {
  name: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  reference?: string;
};

type InfoSectionProps = {
  title: string;
  items: { label: string; value: string | string[] }[];
};

const InfoSection: React.FC<InfoSectionProps> = ({ title, items }) => (
  <div className="bg-gray-50 rounded-lg p-6">
    {title && (
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    )}
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-sm font-medium text-gray-600">
            {item.label}
          </span>
          <span className="text-gray-900">
            {Array.isArray(item.value)
              ? item.value.join(", ")
              : item.value || "-"}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ReviewConfirm = () => {
  const { getValues } = useFormContext<FormData>();
  const formData = getValues();

  // Prevent any unintended form submissions
  useEffect(() => {
    const preventSubmission = (e: Event) => {
      if (e.type === "submit") {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    // Add capture phase listener to catch events before they bubble
    document.addEventListener("submit", preventSubmission, true);

    return () => {
      document.removeEventListener("submit", preventSubmission, true);
    };
  }, []);

  return (
    <div
      className="space-y-6"
      onClick={e => e.preventDefault()}
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        অ্যাপয়েন্টমেন্ট বিবরণ
      </h2>

      <InfoSection
        title=""
        items={[
          { label: "নাম", value: formData.name },
          { label: "বয়স", value: formData.age },
          { label: "লিঙ্গ", value: formData.gender },
          { label: "ফোন", value: formData.phone },
          { label: "ইমেইল", value: formData.email },
          { label: "ঠিকানা", value: formData.address },
          { label: "রেফারেন্স", value: formData.reference || "-" },
        ]}
      />

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <h4 className="text-lg font-medium text-yellow-800 mb-2">
          গুরুত্বপূর্ণ তথ্য
        </h4>
        <ul className="list-disc list-inside space-y-2 text-yellow-700">
          <li>
            নির্ধারিত দিনে সকাল ৯টা থেকে বিকাল ৫টার মধ্যে যেকোনো সময় আসতে পারেন
          </li>
          <li>সকল মেডিকেল রিপোর্ট সাথে নিয়ে আসুন</li>
          <li>পূর্ববর্তী প্রেসক্রিপশন (যদি থাকে) সাথে আনুন</li>
          <li>মাস্ক পরে আসুন</li>
        </ul>
      </div>
    </div>
  );
};

export default ReviewConfirm;
