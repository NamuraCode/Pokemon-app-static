import { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts";
import { pokemonApi } from "@/api";
import { PokemonListRes, SmallPokemon } from "@/interfaces";
import { PokemonCart } from '@/components/pokemon'

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de pokemons">
      <div className="max-w-[100%] gap-6 grid grid-cols-4 grid-rows-2">
        {pokemons.map((pokemon, index) => {
          return <PokemonCart key={index} pokemon={pokemon} />;
        })}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonApi.get<PokemonListRes>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
