import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="David Naranjo" />
        <meta name="description" content="Information about pokemon XXXX" />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <main>{children}</main>
    </>
  );
};
