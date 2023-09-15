import Head from 'next/head';
import { Navbar } from '../ui';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name='author' content='David Naranjo' />
        <meta
          name='description'
          content={`Information about pokemon ${title}`}
        />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />

        <meta property='og:title' content={`Info about pokemon: ${title}`} />
        <meta
          property='og:description'
          content={`This page is about ${title}`}
        />
        <meta property='og:image' content={`${origin}/images/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
