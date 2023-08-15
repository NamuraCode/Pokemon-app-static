import Head from "next/head";
import { Navbar } from "../ui";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="David Naranjo" />
        <meta name="description" content={`Information about pokemon ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar/>
      <main>{children}</main>
    </>
  );
};
