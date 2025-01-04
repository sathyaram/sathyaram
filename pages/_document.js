import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V2ZX65PRKW"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V2ZX65PRKW');
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="preload"
          href="/fonts/Maison-Medium.woff"
          as="font"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/fonts/Maison-Medium.woff2"
          as="font"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/fonts/Maison-Light.woff"
          as="font"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/fonts/Maison-Light.woff2"
          as="font"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/fonts/Californication.ttf"
          as="font"
          crossOrigin="anonymous"
        ></link> */}
        <body className="midnight" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
