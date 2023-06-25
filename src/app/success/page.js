"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Header from "../components/Header";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!!!
            </h1>
          </div>
          <p>
            Thank you for shopping in the Amazoniverse! We appreciate your
            business and are delighted to have provided you with a seamless
            online shopping experience. At Amazoniverse, we strive to offer a
            vast selection of products from various categories, ensuring that
            you find exactly what you need.
          </p>
          <button onClick={() => router.push("/")} className="button mt-8">
            Go to Home Page
          </button>
        </div>
      </main>
    </div>
  );
};

export default page;
