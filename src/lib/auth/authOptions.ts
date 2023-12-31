import { NextAuthOptions } from "next-auth";
import { Database } from "lib/Models/Database";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username or email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "•••••••••••",
        },
      },

      async authorize(credentials, req) {
        const pocket = Database.getConnection();
        try {
          const authData = await pocket.admins.authWithPassword(
            credentials?.username ?? "",
            credentials?.password ?? ""
          );

          return { ...authData.admin, token: authData.token };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};
