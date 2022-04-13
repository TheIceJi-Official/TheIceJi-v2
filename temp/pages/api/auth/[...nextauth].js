import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Auth0Provider from 'next-auth/providers/auth0'
import CredentialsProvider from 'next-auth/providers/credentials'
import Serverconfig from 'server/config'

// import Adapters from 'next-auth/adapters'
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

export default NextAuth({
  // *?   Used to debug https://github.com/nextauthjs/next-auth/issues/1664
  cookies: {
    csrfToken: {
      name: 'next-auth.csrf-token',
      options: {
        httpOnly: true,
        sameSite: 'none',
        path: '/',
        secure: true,
      },
    },
    pkceCodeVerifier: {
      name: 'next-auth.pkce.code_verifier',
      options: {
        httpOnly: true,
        sameSite: 'none',
        path: '/',
        secure: true,
      },
    },
  },
  providers: [
    Providers.Google({
      clientId: Serverconfig.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: Serverconfig.AUTH_GOOGLE_CLIEN_SECRET,
    }),
    Providers.GitHub({
      clientId: Serverconfig.AUTH_GITHUB_CLIENT_ID,
      clientSecret: Serverconfig.AUTH_GITHUB_CLIEN_SECRET,
    }),
    Providers.Facebook({
      clientId: Serverconfig.AUTH_FB_APP_ID,
      clientSecret: Serverconfig.AUTH_FB_APP_SECRET,
    }),
    Auth0Provider({
      clientId: Serverconfig.AUTH0_CLIENT_ID,
      clientSecret: Serverconfig.AUTH0_CLIENT_SECRET,
      issuer: Serverconfig.AUTH0_ISSUER,
      scope: 'openid your_custom_scope',
      profile(profile) {
        return {}
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (credentials.password === 'password') {
          return {
            id: 1,
            name: 'Fill Murray',
            email: 'bill@fillmurray.com',
            image: 'https://www.fillmurray.com/64/64',
          }
        }
        return null
      },
    }),
  ],
  jwt: {
    encryption: true,
    secret: Serverconfig.TOKEN,
  },
  debug: false,
  theme: 'auto',
})
