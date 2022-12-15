import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={"app"}>
          <div className={"background"}></div>
        <head>
          <title>BDX Poker</title>
        </head>
        <body>
          <Navbar/>
          <Component {...pageProps} />
        </body>
      </div>

  )
}
