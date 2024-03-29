import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap"
        rel="stylesheet"></link>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
