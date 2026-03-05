import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { locale } = await req.json();
  const validLocale = ["en", "ua"].includes(locale) ? locale : "en";

  const response = NextResponse.json({ success: true });
  response.cookies.set("locale", validLocale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });
  return response;
}
