"use client";
import { useRouter } from "next/navigation";

const GoToHomeButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/")} className="button mt-8">
      Go to Home Page
    </button>
  );
};

export default GoToHomeButton;
