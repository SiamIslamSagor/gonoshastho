import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { toast } from "react-hot-toast";

type FormData = {
  symptoms: string;
  documentUrls: string[];
};

const MedicalHistory = () => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useFormContext<FormData>();

  const [isUploading, setIsUploading] = useState(false);
  const documentUrls = watch("documentUrls") || [];
  const symptoms = watch("symptoms");

  const textareaClasses =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500";
  const errorClasses = "text-red-500 text-sm mt-1";

  const uploadToImageBB = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=b0bed1fe77347e2392e2db1ba901000a",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return data.data.url;
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length + documentUrls.length > 5) {
      toast.error("সর্বোচ্চ ৫টি ছবি আপলোড করা যাবে");
      return;
    }

    const validFiles = files.filter(file => {
      if (!file.type.startsWith("image/")) {
        toast.error(`${file.name} একটি ছবি নয়`);
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error(`${file.name} খুব বড় (সর্বোচ্চ ৫MB)`);
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) return;

    setIsUploading(true);
    try {
      const uploadPromises = validFiles.map(file => uploadToImageBB(file));
      const urls = await Promise.all(uploadPromises);

      setValue("documentUrls", [...documentUrls, ...urls]);
      toast.success("ডকুমেন্ট আপলোড সফল হয়েছে");
    } catch (error) {
      toast.error("ডকুমেন্ট আপলোড ব্যর্থ হয়েছে");
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
      // Clear the input
      e.target.value = "";
    }
  };

  const removeUploadedImage = (index: number) => {
    setValue(
      "documentUrls",
      documentUrls.filter((_, i) => i !== index)
    );
  };

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
            রোগের লক্ষণ (ঐচ্ছিক)
          </label>
          <textarea
            id="symptoms"
            {...register("symptoms")}
            rows={4}
            className={`${textareaClasses} ${
              errors.symptoms ? "border-red-500" : ""
            }`}
            placeholder="আপনার রোগের লক্ষণগুলি বিস্তারিত লিখুন"
          />
          {errors.symptoms && (
            <p className={errorClasses}>{errors.symptoms.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              মেডিকেল ডকুমেন্টস (ঐচ্ছিক)
            </label>
            <p className="text-sm text-gray-500 mb-2">
              সর্বোচ্চ ৫টি ছবি আপলোড করুন (প্রতিটি সর্বোচ্চ ৫MB)
            </p>
          </div>

          <div className="flex items-center">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="document-upload"
              disabled={isUploading || documentUrls.length >= 5}
            />
            <label
              htmlFor="document-upload"
              className={`px-4 py-2 bg-white border border-gray-300 rounded-md font-medium text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer ${
                isUploading || documentUrls.length >= 5
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {isUploading ? "আপলোড হচ্ছে..." : "ছবি নির্বাচন করুন"}
            </label>
          </div>

          {/* Uploaded Images */}
          {documentUrls.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                আপলোড করা ডকুমেন্টস
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {documentUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <div className="relative w-full rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={url}
                        alt={`Document ${index + 1}`}
                        width={500}
                        height={300}
                        className="w-full h-auto object-contain"
                        priority={index < 2}
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-200 -z-10" />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeUploadedImage(index)}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-100 transition-opacity duration-200 hover:bg-red-600 z-10"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
