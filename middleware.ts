import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const type = url.searchParams.get("type");

  // default url params
  if (!type) {
    url.searchParams.set("type", "select");
    return NextResponse.redirect(url);
  }

  if (type === "finish") {
    return NextResponse.redirect(new URL("/csjt", request.url));
  }
}

export const config = {
  matcher: ["/profiling"],
};
