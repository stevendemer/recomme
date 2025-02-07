import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export default auth((req) => {
  if (req.nextUrl.pathname.startsWith("/profiling")) {
    const url = req.nextUrl.clone();

    const type = url.searchParams.get("type");

    // default url params
    if (!type) {
      url.searchParams.set("type", "select");
      return NextResponse.redirect(url);
    }

    if (type === "finish") {
      return NextResponse.redirect(new URL("/csjt", req.url));
    }
  }

  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  return NextResponse.next();
});

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith("/profiling")) {
//     const url = request.nextUrl.clone();

//     const type = url.searchParams.get("type");

//     // default url params
//     if (!type) {
//       url.searchParams.set("type", "select");
//       return NextResponse.redirect(url);
//     }

//     if (type === "finish") {
//       return NextResponse.redirect(new URL("/csjt", request.url));
//     }
//   }

//   return NextResponse.next();
// }

export const config = {
  matcher: [
    /*
     * Apply middleware to all pages except:
     * 1. /api/* (exclude all API routes)
     * 2. /login (exclude the login page)
     * 3. /_next/* (exclude Next.js assets, e.g., /_next/static/*)
     */
    "/((?!api|login|_next/static|_next/image).*)",
  ],
};
