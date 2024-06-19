import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
]);

const isPublicRoute = createRouteMatcher(['/','/sign-in(.*)', '/sign-up(.*)','/product(.*)']);

export default clerkMiddleware((auth, req) => {
  const pathname = req.nextUrl.pathname;

    if(!isPublicRoute(req)) {
      auth().protect();
    }

    if (isProtectedRoute(req)) auth().protect();

    if (pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};