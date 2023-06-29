"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import { selectItems, selectTotal } from "../store/cartSlice";
import CheckoutProduct from "./CheckoutProduct";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState } from "react";

const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  const checkoutHandler = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post(
      "/api/create-checkout-session",
      {
        items: items,
        email: session.user.email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setLoading(false);

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100">
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="/static/checkout-img.webp"
            width={1020}
            height={250}
            style={{ objectFit: "contain" }}
            alt="Item"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Cart is Empty!!!" : "Shopping Cart"}
            </h1>
            {items.map((item, i) => {
              return (
                <div key={item.id}>
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    hasPrime={item.hasPrime}
                    qty={item.qty}
                  />
                  <hr className="dashed color bg-yellow-300 h-0.5 my-8" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <div className="fixed bottom-0 w-screen sm:w-auto bg-white sm:sticky sm:top-40 z-50">
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(total)}
                </span>
              </h2>
              <button
                role="link"
                onClick={checkoutHandler}
                disabled={!session}
                className={`rounded-md mx-auto w-screen sm:w-auto button max-w-xs my-2 font-bold ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {loading && (
                  <svg
                    class="inline animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
