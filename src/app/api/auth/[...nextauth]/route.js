import NextAuth from "next-auth/next";
import CredentialsProviders from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProviders({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Your Email",
          //   name: "email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Type Password",
          //   name: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        return true;
      },
    }),
  ],
});

export {handler as GET, handler as POST};
