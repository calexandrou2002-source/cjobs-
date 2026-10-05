import Navbar from "../components/Navbar";

export default function CVBuilderPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-blue-950 tracking-tight">
            CV Builder
          </h1>
          <p className="text-slate-500 mt-2 text-base">
            Create a professional, structured resume by filling out the sections below.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100 space-y-10">
          
          {/* 1. Personal & Contact Information */}
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2 border-slate-100">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-slate-700">Professional Summary</label>
                <textarea
                  placeholder="A brief pitch highlighting your background, focus, and career goals..."
                  className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* 2. Education & Experience */}
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2 border-slate-100">
              Education & Experience
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-700">University Education</label>
                <span className="text-xs text-slate-400 block mb-2">Include your degree, major, university, and years.</span>
                <textarea
                  placeholder="e.g. M.Sc. in Systems Engineering, Chalmers University of Technology (2023 - 2026)"
                  className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-sm font-semibold text-slate-700">Work Experience</label>
                  <span className="text-xs text-slate-400 block mb-2">Details of previous professional employment.</span>
                  <textarea
                    placeholder="Responsibilities, achievements, and key duties..."
                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    rows={5}
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-semibold text-slate-700">Internship Experience</label>
                  <span className="text-xs text-slate-400 block mb-2">Practical summer work, co-ops, or traineeships.</span>
                  <textarea
                    placeholder="Projects managed and industry skills gained during internships..."
                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    rows={5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Personal Projects */}
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2 border-slate-100">
              Personal Projects
            </h2>
            <div>
              <label className="block mb-1 text-sm font-semibold text-slate-700">Engineering & Software Projects</label>
              <span className="text-xs text-slate-400 block mb-2">Highlight hands-on systems, apps, research, or extracurricular team projects.</span>
              <textarea
                placeholder="Describe what you built, the objective, and your role (e.g. Aerospace design, open-source work, or data tools)..."
                className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                rows={4}
              />
            </div>
          </div>

          {/* 4. Technical Capabilities & Spoken Languages */}
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2 border-slate-100">
              Skills, Languages & Hobbies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Tech Stack */}
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-semibold text-slate-700">Programming Languages</label>
                  <span className="text-xs text-slate-400 block mb-2">The languages you write code in.</span>
                  <input
                    type="text"
                    placeholder="e.g. Python, MATLAB, SQL, JavaScript"
                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-semibold text-slate-700">Technologies & Tools</label>
                  <span className="text-xs text-slate-400 block mb-2">Frameworks, libraries, hardware, and engineering software.</span>
                  <input
                    type="text"
                    placeholder="e.g. React, Git, SolidWorks, Pandas"
                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Right Column: Spoken Languages & Hobbies */}
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-semibold text-slate-700">Spoken Languages</label>
                  <span className="text-xs text-slate-400 block mb-2">Languages you use to communicate with teams.</span>
                  <input
                    type="text"
                    placeholder="e.g. English (Fluent), Swedish (Conversational)"
                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-semibold text-slate-700">Personal Hobbies</label>
                  <span className="text-xs text-slate-400 block mb-2">Interests outside of academic or corporate environments.</span>
                  <input
                    type="text"
                    placeholder="e.g. Rocket building, hiking, photography, chess"
                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-bold shadow-md shadow-blue-200 active:scale-[0.99] duration-150">
              Generate CV
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}