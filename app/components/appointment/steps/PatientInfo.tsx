import React from "react";
import { useFormContext } from "react-hook-form";

type FormData = {
  name: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  reference: string;
};

const PatientInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  const inputClasses =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500";
  const errorClasses = "text-red-500 text-sm mt-1";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">রোগীর তথ্য</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            নাম <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "নাম আবশ্যক",
              minLength: {
                value: 3,
                message: "নাম কমপক্ষে ৩ অক্ষর হতে হবে",
              },
            })}
            className={`${inputClasses} ${errors.name ? "border-red-500" : ""}`}
            placeholder="আপনার পূর্ণ নাম লিখুন"
          />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            বয়স <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: "বয়স আবশ্যক",
              min: {
                value: 0,
                message: "বয়স ০ এর চেয়ে বেশি হতে হবে",
              },
              max: {
                value: 150,
                message: "বয়স ১৫০ এর চেয়ে কম হতে হবে",
              },
            })}
            className={`${inputClasses} ${errors.age ? "border-red-500" : ""}`}
            placeholder="আপনার বয়স লিখুন"
          />
          {errors.age && <p className={errorClasses}>{errors.age.message}</p>}
        </div>

        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            লিঙ্গ <span className="text-red-500">*</span>
          </label>
          <select
            id="gender"
            {...register("gender", {
              required: "লিঙ্গ নির্বাচন করুন",
            })}
            className={`${inputClasses} ${
              errors.gender ? "border-red-500" : ""
            }`}
          >
            <option value="" className="text-gray-500">
              লিঙ্গ নির্বাচন করুন
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
          {errors.gender && (
            <p className={errorClasses}>{errors.gender.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ফোন নম্বর <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "ফোন নম্বর আবশ্যক",
              pattern: {
                value: /^01[3-9]\d{8}$/,
                message: "সঠিক বাংলাদেশি ফোন নম্বর দিন",
              },
            })}
            className={`${inputClasses} ${
              errors.phone ? "border-red-500" : ""
            }`}
            placeholder="০১XXXXXXXXX"
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
          )}
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
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "সঠিক ইমেইল ঠিকানা দিন",
              },
            })}
            className={`${inputClasses} ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ঠিকানা <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            {...register("address", {
              required: "ঠিকানা আবশ্যক",
              minLength: {
                value: 10,
                message: "ঠিকানা কমপক্ষে ১০ অক্ষর হতে হবে",
              },
            })}
            rows={3}
            className={`${inputClasses} ${
              errors.address ? "border-red-500" : ""
            }`}
            placeholder="আপনার বর্তমান ঠিকানা লিখুন"
          />
          {errors.address && (
            <p className={errorClasses}>{errors.address.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="reference"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            রেফারেন্স
          </label>
          <input
            type="text"
            id="reference"
            {...register("reference")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder:text-gray-400"
            placeholder="কে রেফার করেছে? (ঐচ্ছিক)"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
