import NextAuth, { DefaultSession } from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

declare module "next-auth" {
  interface Session {
    access_token?: string;
    refresh_token?: string;
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    id?: string;
    email?: string;
    name?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },

  providers: [
    Keycloak({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
      profile: (profile) => {
        profile.id = profile.sub;

        return profile;
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          id: profile.sub,
          email: profile.email,
          name: profile.name,
          given_name: profile.given_name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // send properties to the client

      if (token) {
        session.access_token = token.accessToken as string | undefined;
        session.refresh_token = token.refreshToken as string | undefined;

        session.user = {
          ...session.user,
          id: token.id as string,
          email: token.email || "",
          name: token.name || "",
        };
      }

      // console.log("session is ", session);

      return session;
    },
  },
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
