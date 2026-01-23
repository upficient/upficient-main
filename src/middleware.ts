import { NextRequest, NextResponse } from "next/server";

export default function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const session = req.cookies.get("session")?.value;

  if (path.startsWith("/dashboard") && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if ((path === "/login" || path === "/signup") && session) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\.).*)"],
};
