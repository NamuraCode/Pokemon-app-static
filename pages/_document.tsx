import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

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
    return { ...initialProps};
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
