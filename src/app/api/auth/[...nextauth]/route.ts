import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchData } from "@/data/fetchData";

export const authOptions = {
  secret: process.env.SECRET as string,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await fetchData({
          data: {
            email: credentials?.email,
            password: credentials?.password,
          },
          path: "login",
        });

        if (user && user?.respData) {
          return user?.respData;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, trigger, user, session }: any) {
      user && (token.user = user);
      if (trigger === "update") {
        token.user = { ...token.user, ...session };
      }

      return token;
    },
    async session({ session, trigger, token }: any) {
      session = token.user as any;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
