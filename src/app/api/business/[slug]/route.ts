import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const CSRF_TOKEN = process.env.CSRF_TOKEN; // Server-only, not exposed to browser

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  try {
    const response = await fetch(`${BASE_URL}/business/public/${slug}/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRFTOKEN": CSRF_TOKEN || "",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Business not found" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API proxy error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch business data" },
      { status: 500 },
    );
  }
}
