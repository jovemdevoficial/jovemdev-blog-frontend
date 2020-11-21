import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Poppins:wght@200;400;500&family=Roboto:wght@100;300;400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#15e226" />
          <meta name="rating" content="general" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="revisit-after" content="1 day" />
        </Head>
        <body>
          <noscript>
            Este site não funciona muito bem sem Javascript, habilite porfavor
            {':)'}
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
