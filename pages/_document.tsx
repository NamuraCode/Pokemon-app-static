import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

// import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // ctx has a response object response, manipulate the response object.
  // Or ') {'
    // configuration recommended by nextjs
    // const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    // ctx.renderPage = () =>
    //   originalRenderPage({
        // Useful for wrapping the whole react tree
        // enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        // enhanceComponent: (Component) => Component,
      // });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);
    return { 
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

  render() {
    return (
      <Html lang="es" className='dark'>
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="A site for my programming portfolio" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
