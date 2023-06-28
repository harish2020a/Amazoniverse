import GoToHomeButton from "@/app/components/GoToHomeButton";

const NotFoundPage = async () => {
  return (
    <div className="bg-gray-100 h-screen">
      <main className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-0 p-2 sm:p-10 w-screen sm:w-auto bg-gray-100 md:bg-white rounded-b-lg">
          <h1 className="font-bold text-3xl sm:text-6xl self-center my-5 sm:my-10">404 Not Found</h1>
          <GoToHomeButton />
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
