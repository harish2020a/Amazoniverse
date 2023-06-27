import GoToHomeButton from "@/app/components/GoToHomeButton";

const NotFoundPage = async () => {
  return (
    <div className="bg-gray-100 h-screen">
      <main className="max-w-4xl mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <h1 className="font-bold text-6xl self-center m-20">404 Not Found</h1>
          <GoToHomeButton />
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
