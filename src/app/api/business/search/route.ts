import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const CSRF_TOKEN = process.env.CSRF_TOKEN; // Server-only, not exposed to browser

export async function GET(request: NextRequest) {
  // Forward search / profession / page as-is
  const query = request.nextUrl.searchParams.toString();

  try {
    const response = await fetch(
      `${BASE_URL}/business/search/${query ? `?${query}` : ""}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRFTOKEN": CSRF_TOKEN || "",
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to search businesses" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API proxy error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to search businesses" },
      { status: 500 },
    );
  }
}
