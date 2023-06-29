import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { getServerSession } from "next-auth/next";
import GoToHomeButton from "@/app/components/GoToHomeButton";
import { authOptions } from "@/app/utils/authOptions";
import { notFound } from "next/navigation";

const SuccessPage = async ({ searchParams }) => {
  const stripeSessionId = searchParams?.sessionId?.startsWith("cs_");
  const session = await getSession();

  return (
    <div className="bg-gray-100 h-screen">
      <main className="max-w-4xl mx-auto mt-10">
        <div className="flex flex-col p-10 bg-white">
          {session && stripeSessionId && (
            <>
              <div className="flex items-center space-x-2 mb-5">
                <CheckCircleIcon className="text-green-500 h-10" />
                <h1 className="text-3xl">
                  Thank you, your order has been confirmed!!!
                </h1>
              </div>
              <p>
                Thank you for shopping in the Amazoniverse! We appreciate your
                business and are delighted to have provided you with a seamless
                online shopping experience. At Amazoniverse, we strive to offer
                a vast selection of products from various categories, ensuring
                that you find exactly what you need.
              </p>
            </>
          )}
          {(!stripeSessionId || !session) && notFound()}
          <GoToHomeButton />
        </div>
      </main>
    </div>
  );
};

export default SuccessPage;

async function getSession() {
  const session = await getServerSession(authOptions);
  return session;
}
