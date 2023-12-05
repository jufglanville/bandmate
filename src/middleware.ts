// Without matcher, this line applies to every route
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/admin")) {
        return token?.role === "admin";
      }
      return !!token;
    },
  },
});

// Applies next-auth only to matching routes - can be regex
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/admin:path*", "/profile"] };
