import { NextResponse } from "next/server";

export async function GET() {
  const appId = process.env.ADZUNA_APP_ID;
  const appKey = process.env.ADZUNA_APP_KEY;

  const url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${appId}&app_key=${appKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return NextResponse.json(data);
}