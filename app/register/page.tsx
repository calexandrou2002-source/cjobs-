import Navbar from "../components/Navbar";
export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      
      <section className="max-w-6xl mx-auto p-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Registration Form
        </h1>
        <div>
          <label className="block mb-2 font-semibold">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-lg"
            />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 border rounded-lg"
            />
        </div>
        <div>
          <label className="block mb-2 font-semibold">City</label>
          <input
            type="text"
            placeholder="Enter your city"
            className="w-full p-3 border rounded-lg"
            />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Country</label>
          <input
            type="text"
            placeholder="Enter your country"
            className="w-full p-3 border rounded-lg"
            />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-lg"
            />
        </div>  
        <div>
          <label className="block mb-2 font-semibold">Repeat Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full p-3 border rounded-lg"
            />
        </div>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Register
        </button> 

       
      </section>
    </main>
  );
} 