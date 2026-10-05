import Navbar from "../components/Navbar";  
export default function CountriesPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />

      <section className="max-w-6xl mx-auto p-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Countries of Interest
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Sweden</h2>
            <p className="text-gray-600 mt-2">Stockholm, Gothenburg, Malmö</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Norway</h2>
            <p className="text-gray-600 mt-2">Oslo, Bergen, Trondheim</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Finland</h2>
            <p className="text-gray-600 mt-2">Helsinki, Espoo, Tampere</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Denmark</h2>
            <p className="text-gray-600 mt-2">Copenhagen, Aarhus, Odense</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Netherlands</h2>
            <p className="text-gray-600 mt-2">Amsterdam, Rotterdam, The Hague</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Germany</h2>
            <p className="text-gray-600 mt-2">Berlin, Munich, Hamburg</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Belgium</h2>
            <p className="text-gray-600 mt-2">Brussels, Antwerp, Ghent</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold">Austria</h2>
            <p className="text-gray-600 mt-2">Vienna, Graz, Salzburg</p>
          </div>
        </div>
      </section>
    </main>
  );
  }