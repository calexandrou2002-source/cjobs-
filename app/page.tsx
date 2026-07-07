export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50">
      <nav  className="flex justify-between items-center bg-white shadow px-8 py-4 w-full">
        <h1 className="text-2xl font-bold text-blue-900 mb-6"> Jobs in Northern Europe </h1>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-blue-600">Jobs</a>
          <a href="#" className="hover:text-blue-600">CV Builder </a>
          <a href="#" className="hover:text-blue-600">Countries </a>
          <a href="#" className="hover:text-blue-600">Login </a>
        </div>
      </nav>
       <section className="flex flex-col items-center justify-center text-center mt-32">

        <h2 className="text-6xl font-bold text-blue-900 mb-10">
          Find English-Speaking Jobs
        </h2>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mb-10">
           Search thousands of English-speaking jobs across the Nordic countries
           and Central Europe.
        </p>

      

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">  Search Jobs</button>
      <div className="grid grid-cols-3 gap-6 mt-16">

  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
    🇸🇪 
  </div>

  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
    🇳🇴 
  </div>

  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
    🇩🇰 
  </div>

  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
    🇫🇮 
  </div>

  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
    🇩🇪 
  </div>

  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
    🇳🇱
  </div>

</div>
     </section>
    </main>
  );
}