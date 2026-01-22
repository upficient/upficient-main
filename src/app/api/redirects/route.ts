import { NextResponse } from "next/server";
import { getAll301Redirects } from "@/services/redirects.service";

export async function GET() {
  try {
    const redirects = await getAll301Redirects();
    return NextResponse.json(redirects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch redirects" },
      { status: 500 }
    );
  }
}
