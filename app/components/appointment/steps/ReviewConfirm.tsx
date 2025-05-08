import React from "react";

interface ReviewConfirmProps {
  formData: {
    name: string;
    age: string;
    gender: string;
    phone: string;
    email: string;
    address: string;
    symptoms: string;
    previousTreatments: string;
    currentMedications: string;
    allergies: string;
    location: string;
    specificLocation: string;
    availableDays: string[];
  };
}

const ReviewConfirm: React.FC<ReviewConfirmProps> = ({ formData }) => {
  const InfoSection = ({
    title,
    items,
  }: {
    title: string;
    items: { label: string; value: string | string[] }[];
  }) => (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      <div className="bg-gray-50 rounded-lg p-4">
        <dl className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="text-sm font-medium text-gray-500 sm:w-1/3">
                {item.label}
              </dt>
              <dd className="text-sm text-gray-900 sm:w-2/3">
                {Array.isArray(item.value)
                  ? item.value.join(", ")
                  : item.value || "-"}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        অ্যাপয়েন্টমেন্ট বিবরণ
      </h2>

      <InfoSection
        title="ব্যক্তিগত তথ্য"
        items={[
          { label: "নাম", value: formData.name },
          { label: "বয়স", value: formData.age },
          { label: "লিঙ্গ", value: formData.gender },
          { label: "ফোন", value: formData.phone },
          { label: "ইমেইল", value: formData.email },
          { label: "ঠিকানা", value: formData.address },
        ]}
      />

      <InfoSection
        title="মেডিকেল তথ্য"
        items={[
          { label: "রোগের লক্ষণ", value: formData.symptoms },
          { label: "পূর্ববর্তী চিকিৎসা", value: formData.previousTreatments },
          { label: "বর্তমান ঔষধ", value: formData.currentMedications },
          { label: "এলার্জি", value: formData.allergies },
        ]}
      />

      <InfoSection
        title="চেম্বার লোকেশন"
        items={[
          { label: "শহর", value: formData.location },
          { label: "এলাকা", value: formData.specificLocation },
          { label: "চেম্বার দিন", value: formData.availableDays },
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
