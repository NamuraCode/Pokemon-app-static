import { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts";
import { pokemonApi } from "@/api";
import { PokemonListRes, SmallPokemon } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title="Listado de pokemons">
      <ul>
        {pokemons.map((pokemon, index) => {
          return (
            <li key={index}>
              <span>id: {pokemon.id}</span>
              <br />
              <span>name: {pokemon.name}</span>
              <Image
                src={pokemon.img}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Link href={pokemon.url} target="blank">
                go to {pokemon.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonApi.get<PokemonListRes>("/pokemon?limit=151");
  console.log(data);
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    pokemon.id = index;
    pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`;
    return pokemon;
  });
  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
