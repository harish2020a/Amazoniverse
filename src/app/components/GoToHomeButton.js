"use client";
import { useRouter } from "next/navigation";

const GoToHomeButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/")} className="button w-40 sm:w-8/12 mx-auto my-2 sm:my-8">
      Go to Home Page
    </button>
  );
};

export default GoToHomeButton;
