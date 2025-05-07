import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPrivateRoute = createRouteMatcher([
  "/profile(.*)",
  "/dashboard(.*)",
  // "/cartItems(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPrivateRoute(req)) {
    await auth().protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*|favicon.ico).*)", "/(api|trpc)(.*)"],
};
