import { auth } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const { userId } = await auth()
  const protectedRoutes = ["/checkout", "/orders", "/profile", "/dashboard"]; // Protected pages

  const url = new URL(req.url);
  const pathname = url.pathname;

  // Agar user login nahi hai aur protected route pe ja raha hai
  if (!userId && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to Sign In page
  }

  return NextResponse.next(); // Allow other requests
}

// Middleware sirf in pages pe chalega
export const config = {
  matcher: ["/checkout", "/orders", "/profile", "/dashboard"],
};
