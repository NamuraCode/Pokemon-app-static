import { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts";
import { pokemonApi } from "@/api";
import { PokemonListRes, SmallPokemon } from "@/interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  console.log( pokemons );
  return (
    <Layout title="Listado de pokemons">
      <ul>
        {pokemons.map((pokemon, index) => {
          return <li key={index}>
            <span></span>
          </li>;
        })};
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonApi.get<PokemonListRes>("/pokemon?limit=151");
  console.log( data );
  const pokemonsFill : SmallPokemon[] = data.results.map((pokemon, index) => {
    return pokemon.id = index, pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
  });
  return {
    props: {
      pokemons: pokemonsFill,
   },
  };
};

export default Home;
