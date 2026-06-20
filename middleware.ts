import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isApi = pathname.startsWith("/api/admin");
  const isAdminPage = pathname.startsWith("/admin");

  if (!isApi && !isAdminPage) return NextResponse.next();

  // Login routes are always accessible
  if (pathname === "/admin" || pathname === "/admin/" || pathname === "/api/admin/auth") {
    return NextResponse.next();
  }

  const token = req.cookies.get("fim-admin-token")?.value;

  if (!token) {
    if (isApi) {
      return NextResponse.json({ error: "Giriş tələb olunur" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  try {
    await verifyToken(token);
    return NextResponse.next();
  } catch {
    if (isApi) {
      return NextResponse.json({ error: "Giriş tələb olunur" }, { status: 401 });
    }
    const response = NextResponse.redirect(new URL("/admin", req.url));
    response.cookies.delete("fim-admin-token");
    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
