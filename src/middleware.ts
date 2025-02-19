import { clerkClient, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/(.*)",
  "/dashboard(.*)",
  "/products(.*)",
  "/category(.*)",
]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;

  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // const session = useSession();
  // const user = session.session?.user.publicMetadata;

  // console.log(user);

  // if(isAdminRoute(req)){
  //   const user = await clerkClient.users.getUser(auth.userId);
  //   const role = user.publicMetadata.role as string | undefined

  //   if(role === "admin"){
  //     return NextResponse.redirect(new URL("/admin", req.url));
  //   }
  // }
  
  
  

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
