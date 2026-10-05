"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const cities = [
    "Stockholm",
    "Göteborg",
    "Malmö",
    "Uppsala",
    "Lund",
    "Umeå",
    "Linköping",
    "Other",
  ];

  const languages = ["english", "svenska"];

  const selectedCities = searchParams.get("city")?.split(",") || [];
  const selectedLanguages = searchParams.get("language")?.split(",") || [];

  function updateFilter(type: string, value: string) {
    // This now keeps all your existing params (like search)
    const params = new URLSearchParams(searchParams.toString());
    const current = params.get(type)?.split(",").filter(Boolean) || [];

    if (current.includes(value)) {
      const updated = current.filter((item) => item !== value);
      if (updated.length) {
        params.set(type, updated.join(","));
      } else {
        params.delete(type);
      }
    } else {
      params.set(type, [...current, value].join(","));
    }

    params.set("page", "1");
    router.push(`/jobs?${params.toString()}`);
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      <h3 className="font-semibold mb-3">City</h3>
      {cities.map((city) => (
        <label key={city} className="flex gap-2 mb-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedCities.includes(city === "Other" ? "other" : city)}
            onChange={() => {
              updateFilter("city", city === "Other" ? "other" : city);
            }}
          />
          {city}
        </label>
      ))}

      <h3 className="font-semibold mt-8 mb-3">Language</h3>
      {languages.map((language) => (
        <label key={language} className="flex gap-2 mb-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedLanguages.includes(language)}
            onChange={() => updateFilter("language", language)}
          />
          {language === "english" ? "English (No Swedish required)" : "Svenska"}
        </label>
      ))}
    </div>
  );
}