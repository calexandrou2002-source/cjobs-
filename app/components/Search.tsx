"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(currentSearch);

  // Sync state if URL search query changes externally
  useEffect(() => {
    setSearchTerm(currentSearch);
  }, [currentSearch]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);

    const params = new URLSearchParams(searchParams.toString());

    if (term.trim()) {
      params.set("search", term.trim());
    } else {
      params.delete("search");
    }

    // Reset pagination on new search query
    params.set("page", "1");

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search jobs, companies, or cities..."
        className="w-full px-5 py-4 pl-12 rounded-2xl bg-white border border-gray-200 shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
      />
      <svg
        className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}