import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow px-8 py-4 w-full">
      <h1 className="text-2xl font-bold text-blue-700">
        Jobs in Northern Europe
      </h1>

      <div className="flex items-center gap-8">
        <Link href="/jobs">Jobs</Link>
        <Link href="/cv-builder">CV Builder</Link>
        <Link href="/countries">Countries</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}