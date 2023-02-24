import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <script src="script.js" defer></script>
        <meta
          name="description"
          content="One-Stop Digital Transformation Services"
        />
        <meta itemProp="name" content="Web3 Development Hub" />
        <meta
          itemProp="description"
          content="One-Stop Digital Transformation Services"
        />
        <meta itemProp="image" content="/image_org.png" />

        <meta
          name="twitter:description"
          content="One-Stop Digital Transformation Services"
        />
        <meta itemProp="twitter:name" content="Web3 Development Hub" />
        <meta
          itemProp="twitter:description"
          content="One-Stop Digital Transformation Services"
        />
        <meta itemProp="twitter:image" content="/image_org.png" />

        <meta
          name="og:description"
          content="One-Stop Digital Transformation Services"
        />
        <meta itemProp="og:name" content="Web3 Development Hub" />
        <meta
          itemProp="og:description"
          content="One-Stop Digital Transformation Services"
        />
        <meta itemProp="og:image" content="/image_org.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
