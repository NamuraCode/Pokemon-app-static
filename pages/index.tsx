import { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts";
import { pokemonApi } from "@/api";

const Home: NextPage = (props) => {
  console.log({ props });
  return (
    <Layout title="Listado de pokemons">
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonApi.get("/pokemon?limit=151");
  console.log( data );
  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default Home;
