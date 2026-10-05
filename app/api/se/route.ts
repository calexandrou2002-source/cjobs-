import { NextResponse } from "next/server";

// ==========================
// CONFIG
// ==========================

const PAGE_SIZE = 20;
const OVERFETCH_MULTIPLIER = 3;
const MAX_UPSTREAM_LIMIT = 100;

const MAIN_CITIES = [
  "Stockholm",
  "Göteborg",
  "Malmö",
  "Uppsala",
  "Lund",
  "Umeå",
  "Linköping",
];

const SWEDISH_LANGUAGE_RE = /\bswedish\b|\bsvenska\b/i;

const REQUIREMENT_SIGNAL_RE = new RegExp(
  [
    "requir\\w*", "must\\b", "mandatory", "fluent\\w*", "fluency",
    "proficien\\w*", "native speaker", "communication skills?",
    "language skills?", "knowledge of", "speak\\w*", "written and verbal",
    "verbal and written", "necessary", "essential", "need(ed)?\\b",
    "ability to", "in both", "as well as", "krav\\w*", "kräv\\w*",
    "måste", "obligatoriskt", "flytande", "behärsk\\w*", "kunskap\\w*",
    "modersmål", "tal och skrift", "muntligt och skriftligt", "obehindrat?",
  ].join("|"),
  "i"
);

function splitIntoClauses(text: string): string[] {
  return text.split(/[.\n•;]|(?:\r\n)/).map((c) => c.trim()).filter(Boolean);
}

function clauseIndicatesSwedishRequirement(text: string): boolean {
  return splitIntoClauses(text).some(
    (clause) =>
      SWEDISH_LANGUAGE_RE.test(clause) && REQUIREMENT_SIGNAL_RE.test(clause)
  );
}

// ==========================
// HELPERS
// ==========================

function buildCityQueryParam(cityParam: string): string | null {
  const rawCities = cityParam.split(",").map((c) => c.trim()).filter(Boolean);
  const hasOther = rawCities.some((c) => c.toLowerCase() === "other");
  const specificCities = rawCities.filter((c) => c.toLowerCase() !== "other");

  if (hasOther) {
    const unselectedMainCities = MAIN_CITIES.filter(
      (mainCity) =>
        !specificCities.some(
          (sc) => sc.toLowerCase() === mainCity.toLowerCase()
        )
    );

    if (unselectedMainCities.length > 0) {
      return unselectedMainCities.map((c) => `-"${c}"`).join(" ");
    }
    return null;
  }

  if (specificCities.length > 0) {
    return specificCities.map((c) => `"${c}"`).join(" OR ");
  }

  return null;
}

function getJobText(job: any): string {
  const description =
    job?.description?.text ??
    job?.description?.text_formatted ??
    job?.description ??
    "";
  const headline = job?.headline ?? "";
  const combined = `${headline} ${typeof description === "string" ? description : ""}`.trim();
  
  if (combined) return combined.toLowerCase();
  return JSON.stringify(job).toLowerCase();
}

function hasStructuredSwedishRequirement(job: any): boolean {
  const mustHaveLanguages = job?.must_have?.languages;
  if (!Array.isArray(mustHaveLanguages)) return false;

  return mustHaveLanguages.some((lang: any) => {
    const label = (lang?.label ?? "").toLowerCase();
    return label.includes("svenska") || label.includes("swedish");
  });
}

function isSwedishRequired(job: any): boolean {
  if (hasStructuredSwedishRequirement(job)) return true;
  const text = getJobText(job);
  return clauseIndicatesSwedishRequirement(text);
}

function mentionsSwedish(job: any): boolean {
  if (hasStructuredSwedishRequirement(job)) return true;
  const text = getJobText(job);
  return (
    text.includes("swedish") ||
    text.includes("svenska") ||
    text.includes("svensk")
  );
}

// ==========================
// ROUTE
// ==========================

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = Math.max(1, Number(searchParams.get("page") || "1"));
  const cityParam = searchParams.get("city") || "";
  const languageParam = searchParams.get("language") || "";
  const searchParam = searchParams.get("search") || "";

  // Convert to lowercase to match filter options ("english" / "svenska")
  const langLower = languageParam.toLowerCase();
  const needsLanguageFilter = langLower === "english" || langLower === "svenska";

  const upstreamLimit = needsLanguageFilter
    ? Math.min(page * PAGE_SIZE * OVERFETCH_MULTIPLIER, MAX_UPSTREAM_LIMIT)
    : PAGE_SIZE;

  const upstreamOffset = needsLanguageFilter ? 0 : (page - 1) * PAGE_SIZE;

  const jobTechUrl = new URL("https://jobsearch.api.jobtechdev.se/search");
  jobTechUrl.searchParams.set("limit", upstreamLimit.toString());
  jobTechUrl.searchParams.set("offset", upstreamOffset.toString());

  // Combine search keyword + city logic cleanly
  const cityQuery = cityParam ? buildCityQueryParam(cityParam) : null;
  const combinedQuery = [searchParam, cityQuery].filter(Boolean).join(" ");
  
  if (combinedQuery) {
    jobTechUrl.searchParams.set("q", combinedQuery);
  }

  try {
    const response = await fetch(jobTechUrl.toString(), { cache: "no-store" });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch jobs from JobTech API" },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (needsLanguageFilter && Array.isArray(data.hits)) {
      const filterFn =
        langLower === "english"
          ? (job: any) => !isSwedishRequired(job)
          : (job: any) => mentionsSwedish(job);

      const filteredHits = data.hits.filter(filterFn);

      const pageStart = (page - 1) * PAGE_SIZE;
      const pageEnd = pageStart + PAGE_SIZE;
      const pageHits = filteredHits.slice(pageStart, pageEnd);

      data.hits = pageHits;
      data.total = {
        value: filteredHits.length,
        approximate: true,
        note: "Count reflects filtered results within the fetched upstream batch, not the full JobTech dataset.",
      };
      data.has_more_upstream = filteredHits.length >= upstreamLimit;
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}