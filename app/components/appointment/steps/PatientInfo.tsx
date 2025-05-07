import React from "react";

type FormData = {
  name: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
};

interface PatientInfoProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const PatientInfo: React.FC<PatientInfoProps> = ({
  formData,
  updateFormData,
}) => {
  const inputClasses =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">রোগীর তথ্য</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            নাম
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={e => updateFormData({ name: e.target.value })}
            className={inputClasses}
            placeholder="আপনার পূর্ণ নাম"
            required
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            বয়স
          </label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={e => updateFormData({ age: e.target.value })}
            className={inputClasses}
            placeholder="বয়স"
            required
          />
        </div>

        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            লিঙ্গ
          </label>
          <select
            id="gender"
            value={formData.gender}
            onChange={e => updateFormData({ gender: e.target.value })}
            className={inputClasses}
            required
          >
            <option value="" className="text-gray-500">
              নির্বাচন করুন
            </option>
            <option value="male" className="text-gray-900">
              পুরুষ
            </option>
            <option value="female" className="text-gray-900">
              মহিলা
            </option>
            <option value="other" className="text-gray-900">
              অন্যান্য
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ফোন নম্বর
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={e => updateFormData({ phone: e.target.value })}
            className={inputClasses}
            placeholder="01XXXXXXXXX"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ইমেইল
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={e => updateFormData({ email: e.target.value })}
            className={inputClasses}
            placeholder="example@email.com"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ঠিকানা
          </label>
          <textarea
            id="address"
            value={formData.address}
            onChange={e => updateFormData({ address: e.target.value })}
            rows={3}
            className={inputClasses}
            placeholder="আপনার বর্তমান ঠিকানা"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
