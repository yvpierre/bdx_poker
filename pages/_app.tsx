import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <head>
              <title>BDX Poker</title>
          </head>
          <div className={"app"}>
              <body>
              <div className={"background"}></div>
              <Navbar/>
              <Component {...pageProps} />
              </body>
          </div>
      </>


  )
}
