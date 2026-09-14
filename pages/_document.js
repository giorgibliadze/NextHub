import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default function Document({ pageLang }) {
  return (
    <Html lang={pageLang}>
      <Head>
        <meta httpEquiv="content-language" content={pageLang} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const initialProps = await NextDocument.getInitialProps(ctx);
  const pageLang =
    ctx.pathname === "/services/webDevelopmentEN" || ctx.pathname.startsWith("/en")
      ? "en"
      : "ka-GE";

  return { ...initialProps, pageLang };
};
