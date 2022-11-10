import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { env } from '../../../env/server.mjs'
import { prisma } from '../../../server/db/client'
import { type ClientSafeProvider } from 'next-auth/react/types.js'

export const authOptions: NextAuthOptions = {
    // Include user.id on session
    callbacks: {
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        },
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/signin',
    },

    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            server: env.EMAIL_PROVIDER_SERVER_CONFIG,
            from: env.EMAIL_PROVIDER_FROM,
        }),
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
    ],
}

export type Providers = {
    email: ClientSafeProvider
    google: ClientSafeProvider
}

export default NextAuth(authOptions)
