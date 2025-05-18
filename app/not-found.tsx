import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-green-600 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                পেজটি খুঁজে পাওয়া যায়নি
              </h1>
              <p className="mt-1 text-base text-gray-500">
                আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। লিংকটি চেক করে আবার
                চেষ্টা করুন।
              </p>
            </div>
            <div className="mt-8 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                href="/"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <FiHome className="mr-2 h-4 w-4" />
                হোম পেজে ফিরে যান
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
