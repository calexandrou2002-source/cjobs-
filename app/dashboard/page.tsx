import Navbar from "../components/Navbar";
import Link from "next/link";















export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />

      <section className="max-w-6xl mx-auto p-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Dashboard
        </h1>

        <p className="text-xl text-gray-600 mb-10">
          Welcome back! What would you like to do today?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/jobs">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h2 className="text-2xl font-semibold"> Search Jobs</h2>
            <p className="text-gray-600 mt-2">
              Find jobs that match your profile.
            </p>
          </div>
        </Link>
         <Link href="/profile">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h2 className="text-2xl font-semibold"> My Profile</h2>
            <p className="text-gray-600 mt-2">
              Update your skills and preferences.
            </p>
          </div>
        </Link>
          <Link href="/cv-builder">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h2 className="text-2xl font-semibold">CV Builder</h2>
              <p className="text-gray-600 mt-2">
                Create or edit your CV.
              </p>
            </div>
          </Link>

          <Link href="/savedjobs">
          
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h2 className="text-2xl font-semibold"> Saved Jobs</h2>
              <p className="text-gray-600 mt-2">
                View your saved jobs.
              </p>
            </div>
          </Link>
          <Link href="/applications">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h2 className="text-2xl font-semibold"> Applications</h2>
            <p className="text-gray-600 mt-2">
              Track your job applications.
            </p>
          </div>
          </Link>
          <Link href="/settings">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h2 className="text-2xl font-semibold"> Settings</h2>
            <p className="text-gray-600 mt-2">
              Manage your account settings.
            </p>
          </div>
          </Link>
        </div>
      </section>
    </main>
  );
}