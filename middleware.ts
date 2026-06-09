import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/admin")) return NextResponse.next();

  // Login page is always accessible
  if (pathname === "/admin" || pathname === "/admin/") {
    return NextResponse.next();
  }

  const token = req.cookies.get("fim-admin-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  try {
    await verifyToken(token);
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/admin", req.url));
    response.cookies.delete("fim-admin-token");
    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
