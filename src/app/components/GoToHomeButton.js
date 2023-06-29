"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

const GoToHomeButton = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("sessionId")?.startsWith("cs_");
  const dispatch = useDispatch();
  if (search) {
    dispatch(clearCart());
  }
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="button w-40 sm:w-8/12 mx-auto my-2 sm:my-8"
    >
      Go to Home Page
    </button>
  );
};

export default GoToHomeButton;
