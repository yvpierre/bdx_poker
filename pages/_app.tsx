import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../src/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>

          <head>
              <title>BDX Poker</title>
              <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&f[]=ranade@700,300,2,701,401,101,100,400,1,500,501,301&display=swap" rel="stylesheet"/>
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
