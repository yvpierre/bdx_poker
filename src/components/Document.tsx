import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&f[]=ranade@700,300,2,701,401,101,100,400,1,500,501,301&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}