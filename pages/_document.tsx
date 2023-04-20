import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          property="description"
          content="One-stop Web3 Development and Digital Transformation Services"
        />
        <meta
          itemProp="name"
          name="name"
          property="name"
          content="Icetea Software"
        />
        <meta
          itemProp="name"
          name="title"
          property="title"
          content="Icetea Software"
        />
        <meta
          itemProp="description"
          name="description"
          property="description"
          content="One-stop Web3 Development and Digital Transformation Services"
        />
        <meta
          itemProp="image"
          name="image"
          property="image"
          content="/fb_img_org.png"
        />

        <meta
          name="twitter:description"
          property="twitter:description"
          content="One-stop Web3 Development and Digital Transformation Services"
        />
        <meta
          itemProp="twitter:name"
          name="twitter:name"
          property="twitter:name"
          content="Icetea Software"
        />
        <meta
          itemProp="twitter:name"
          name="twitter:title"
          property="twitter:title"
          content="Icetea Software"
        />
        <meta
          itemProp="twitter:description"
          property="twitter:description"
          content="One-stop Web3 Development and Digital Transformation Services"
        />
        <meta
          itemProp="twitter:image"
          name="twitter:image"
          property="twitter:image"
          content="/telegram_img_org.png"
        />

        <meta
          name="og:description"
          property="og:description"
          content="One-stop Web3 Development and Digital Transformation Services"
        />
        <meta
          itemProp="og:name"
          name="og:name"
          property="og:name"
          content="Icetea Software"
        />
        <meta
          itemProp="og:name"
          name="og:title"
          property="og:title"
          content="Icetea Software"
        />
        <meta
          itemProp="og:description"
          property="og:description"
          content="One-stop Web3 Development and Digital Transformation Services"
        />
        <meta
          itemProp="og:image"
          name="og:image"
          property="og:image"
          content="/linkedin_img_org.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
