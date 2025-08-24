import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "~/server/db";
import { username, twoFactor, magicLink, emailOTP, haveIBeenPwned } from "better-auth/plugins";
import { passkey } from "better-auth/plugins/passkey";
 
export const auth = betterAuth({
    appName: "PocketPal",
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    emailAndPassword: { 
        enabled: true, 
      }, 
    socialProviders: {
        google: {    
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        },
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        },
        discord: { 
            clientId: process.env.DISCORD_CLIENT_ID as string, 
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string, 
        }, 
    },
    plugins: [ 
        username(),
        twoFactor(),
        magicLink({
            sendMagicLink: async ({ email, token, url }, request) => {
                // send email to user
            }
        }),
        emailOTP({ 
            async sendVerificationOTP({ email, otp, type }) { 
                if (type === "sign-in") { 
                    // Send the OTP for sign in
                } else if (type === "email-verification") { 
                    // Send the OTP for email verification
                } else { 
                    // Send the OTP for password reset
                } 
            }, 
        }),
        passkey(),
        haveIBeenPwned()
    ] 
});