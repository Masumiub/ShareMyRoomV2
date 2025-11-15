import { betterAuth } from "better-auth";
//import { emailPassword } from "better-auth/providers/email-password";
//import { google } from "better-auth/providers/google";

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    experimental: {
        // This enables dev mode without a database
        disableDatabase: true,
    },
})

const handler = auth.handler;
export { handler as GET, handler as POST };


// export const { GET, POST, auth } = betterAuth({
//   providers: [
//     emailPassword(),
//     google({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     })
//   ],

//   experimental: {
//     disableDatabase: true // ✅ allows no DB usage
//   },
// });
