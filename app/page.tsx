import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50">

      <Navbar />


      <section className="flex flex-col items-center justify-center text-center mt-32">
       <h2 className="text-6xl font-bold text-blue-900 mb-10">
          Find English-Speaking Jobs
        </h2>

        <p className="text-xl text-gray-600 mt-4 max-w-2xl mb-10">
          Search thousands of English-speaking jobs across the Nordic countries
          and Central Europe.
        </p>

        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
          Search Jobs
        </button>
      </section>

    </main>
  );
}
   
