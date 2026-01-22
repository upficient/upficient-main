import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// 1. Specify protected and public routes
const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.includes(route)
  );
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }
  // 6. dynamic 301 redirects
  try {
    // Fetch redirect rules dynamically from the API route
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/redirects`
    );

    if (res.ok) {
      const redirects = await res.json();
      console.log("redirect output", redirects);
      // Find a matching redirect
      const redirect = redirects.find((r: any) => r.source === path);

      if (redirect) {
        return NextResponse.redirect(
          new URL(redirect.destination, req.url),
          301
        );
      }
    } else {
      console.error("Failed to fetch redirects:", res.statusText);
    }
  } catch (error) {
    console.error("Middleware error fetching redirects:", error);
  }

  // 6. Set custom path header for tracking
  const response = NextResponse.next();
  response.headers.set("X-Path", path); // Custom header with the path

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
