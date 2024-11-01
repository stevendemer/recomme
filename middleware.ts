import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // default url params
  if (url.pathname === "/profiling") {
    url.pathname = "/profiling/select";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/profiling"],
};
