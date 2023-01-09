import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../src/components/Navbar";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <UserProvider>
          <Head>
              <title>BDX Poker</title>
              <meta charSet="utf-8" />
          </Head>
          <Navbar/>
          <Component {...pageProps} />
      </UserProvider>
  )
}
