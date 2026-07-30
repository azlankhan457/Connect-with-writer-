import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";

const PROTECTED_PREFIXES = [
  "/dashboard",
  "/my-content",
  "/team",
  "/ai-tool",
  "/all-tools",
  "/api-keys",
  "/ai-book-writer",
  "/usage",
  "/account-settings",
];

/**
 * Next.js 16 renamed `middleware` to `proxy`, and Proxy now defaults to the
 * Node.js runtime (previously Edge-only) — which means we can call the
 * Firebase Admin SDK here directly and do full, real session-cookie
 * verification before a protected page ever renders, instead of just
 * checking whether a cookie is present.
 */
export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const user = await getSessionUser(request);
  if (!user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/my-content/:path*",
    "/team/:path*",
    "/ai-tool/:path*",
    "/all-tools/:path*",
    "/api-keys/:path*",
    "/ai-book-writer/:path*",
    "/usage/:path*",
    "/account-settings/:path*",
  ],
};
