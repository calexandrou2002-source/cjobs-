import Navbar from "../components/Navbar";
import Link from "next/link";
import Filters from "../components/Filters";
import Search from "../components/Search";

async function getJobs(
  page: number,
  city?: string,
  language?: string,
  search?: string
) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(
    `${baseUrl}/api/se?page=${page}&city=${encodeURIComponent(
      city || ""
    )}&language=${encodeURIComponent(
      language || ""
    )}&search=${encodeURIComponent(search || "")}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return { hits: [] };
  }

  return res.json();
}

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    city?: string;
    language?: string;
    search?: string;
  }>;
}) {
  const params = await searchParams;

  const page = Number(params.page || "1");
  const city = params.city || "";
  const language = params.language || "";
  const search = params.search || "";

  const data = await getJobs(page, city, language, search);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-10">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-gray-900">
            Find Jobs in Sweden
          </h1>
          <p className="text-gray-500 text-lg mt-3">
            Browse thousands of jobs across Sweden.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="mb-10">
          <Search />
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-12 gap-8">
          {/* FILTERS */}
          <div className="col-span-3">
            <Filters />
          </div>

          {/* JOB LIST */}
          <div className="col-span-9">
            <div className="space-y-6">
              {data?.hits?.map((job: any) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                >
                  {/* TITLE */}
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {job.headline}
                      </h2>
                      <p className="text-lg text-blue-700 font-medium mt-1">
                        {job.employer?.name}
                      </p>
                    </div>

                    {job.logo_url && (
                      <img
                        src={job.logo_url}
                        alt="Company Logo"
                        className="w-20 h-20 object-contain"
                      />
                    )}
                  </div>

                  {/* DETAILS */}
                  <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold">Location</p>
                      <p>
                        {job.workplace_address?.city ||
                          job.workplace_address?.municipality}
                        , {job.workplace_address?.region}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Employment</p>
                      <p>{job.employment_type?.label}</p>
                    </div>

                    <div>
                      <p className="font-semibold">Working Hours</p>
                      <p>{job.working_hours_type?.label}</p>
                    </div>

                    <div>
                      <p className="font-semibold">Occupation</p>
                      <p>{job.occupation?.label}</p>
                    </div>

                    <div>
                      <p className="font-semibold">Published</p>
                      <p>
                        {job.publication_date &&
                          new Date(
                            job.publication_date
                          ).toLocaleDateString()}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">Deadline</p>
                      <p>
                        {job.application_deadline &&
                          new Date(
                            job.application_deadline
                          ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Job Description</h3>
                    <p className="text-gray-600 leading-7">
                      {job.description?.text?.slice(0, 250)}...
                    </p>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex justify-between items-center mt-8">
                    <a
                      href={job.webpage_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-700 font-semibold hover:text-black"
                    >
                      View Details
                    </a>

                    <a
                      href={
                        job.application_details?.url ||
                        `mailto:${job.application_details?.email || ""}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-between mt-10">
              <Link
                href={`/jobs?page=${Math.max(
                  page - 1,
                  1
                )}&city=${city}&language=${language}&search=${search}`}
                className="rounded-xl bg-gray-200 px-5 py-3 hover:bg-gray-300"
              >
                Previous
              </Link>

              <span className="font-semibold text-lg">Page {page}</span>

              <Link
                href={`/jobs?page=${
                  page + 1
                }&city=${city}&language=${language}&search=${search}`}
                className="rounded-xl bg-black px-5 py-3 text-white hover:bg-gray-800"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}