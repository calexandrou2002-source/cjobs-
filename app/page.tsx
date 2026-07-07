export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center p-8">

      <h1 className="text-5xl font-bold text-blue-900 mb-6"> Jobs in Northern Europe </h1>

      <p className="text-xl text-gray-700 mb-8 max-w-2xl">
        English speaking job opportunities 
      </p>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700"> Jobs</button>
    </main>
  );
}