import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <meta
          name="description"
          content="Developer | Designer | Photographer"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}