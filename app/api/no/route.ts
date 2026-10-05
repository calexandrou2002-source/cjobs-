export async function GET() {
  const response = await fetch(
    "https://pam-stilling-feed.nav.no/api/v1/feed",
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuYXYudGVhbS5hcmJlaWRzcGxhc3NlbkBuYXYubm8iLCJraWQiOiI5YTY2OTc2MS1hMmFhLTQ2YjQtOWZkNi0yYTQ5YmNjZjJmNjUiLCJpc3MiOiJuYXYtbm8iLCJhdWQiOiJmZWVkLWFwaS12MiIsImlhdCI6MTc4NDAyNDEyNiwiZXhwIjoxNzg3MDQ4MTI2fQ.n2ox_IkXSbZLecXygj8haSwGPnhrS8UfkbwdnJs8j0s",
      },
    }
  );

  const data = await response.json();

  return Response.json(data);
}