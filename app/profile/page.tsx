import Navbar from "../components/Navbar";
export default function ProfilePage() {
  return (
     <main className="min-h-screen bg-blue-50">
      <Navbar />

      <section className="max-w-6xl mx-auto p-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          My Profile
        </h1>
        <div className="bg-white p-6 rounded-xl shadow space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Job Title"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Skills"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Countries of Interest"
            className="w-full p-3 border rounded-lg"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Save Profile
          </button>
        </div>
      </section>
    </main>
  );
}
