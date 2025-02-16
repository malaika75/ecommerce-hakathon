import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Protected routes (Only logged-in users can access)
const isProtectedRoute = createRouteMatcher([
  "/checkout",
  "/orders",
  "/profile",
  "/dashboard",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Matches all pages except API routes, Next.js internals
};


