import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const language = searchParams.get("language") || "";
  const city = searchParams.get("city") || "";

  const swedenRes = await fetch(
    "https://jobsearch.api.jobtechdev.se/search",
    {
      cache: "no-store",
    }
  );

  const sweden = await swedenRes.json();

  let jobs = sweden.hits.map((job: any) => ({
    id: job.id,
    title: job.headline,
    company: job.employer?.name || "Unknown",
    city: job.workplace_address?.city || "Unknown",
    description: job.description?.text || "",
    applyUrl: job.application_details?.url || "",
    source: "Sweden",
  }));


  // CITY FILTER
  if (city) {
    jobs = jobs.filter((job: any) =>
      job.city.toLowerCase().includes(city.toLowerCase())
    );
  }


  // LANGUAGE FILTER
  if (language === "english") {
    jobs = jobs.filter((job: any) => {
      const text = `
        ${job.title}
        ${job.description}
      `.toLowerCase();


      const swedishRequired = [
        "svenska krävs",
        "krav på svenska",
        "måste kunna svenska",
        "god svenska",
        "flytande svenska",
        "förmåga på svenska",
        "kunskaper i svenska",
        "swedish required"
      ];


      return !swedishRequired.some((word) =>
        text.includes(word)
      );
    });
  }


  return NextResponse.json(jobs);
}