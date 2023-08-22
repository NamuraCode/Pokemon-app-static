import { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts";
import { pokemonApi } from "@/api";
import { PokemonListRes, SmallPokemon } from "@/interfaces";
import Link from "next/link";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title="Listado de pokemons">
      <div className="max-w-[100%] gap-6 grid grid-cols-4 grid-rows-2">
        {pokemons.map(({ id, name, img, url }, index) => {
          return (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={name}
                  className="w-full object-cover h-[140px]"
                  src={img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{name}</b>
                <p className="text-default-500">{id}</p>
                <Link href={url} target="blank" className="text-default-500">
                  go to {name}
                </Link>
              </CardFooter>
            </Card>
          );
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
