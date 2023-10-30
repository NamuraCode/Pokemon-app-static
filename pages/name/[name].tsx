import { useEffect, useState } from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import { Button, Card, CardBody, Image, Spacer } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { pokemonApi } from "@/api";
import { PokemonData, PokemonListRes } from "@/interfaces";
import { Layout } from "@/components/layouts";
import { favoritesController, pokemonController } from "@/utils";

interface Props {
  pokemon: PokemonData;
}

const PokemonPageByName = ({ pokemon }: Props) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(favoritesController.isInFavorites(pokemon.id));
  }, []);

  const toggleSaveFavorites = () => {
    favoritesController.saveInFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 99,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={`Pokemon - ${pokemon.name}`}>
      <Card className="m-auto bg-transparent max-w-3xl mt-10 flex flex-row">
        <CardBody className="flex justify-center items-center bg-background2">
          <Image
            alt={pokemon.name}
            className={"self-center"}
            src={`${pokemon.sprites.front_default}`}
            width={300}
          />
        </CardBody>
        <Spacer x={4} />
        <CardBody className="flex justify-between bg-background2">
          <div className="flex flex-row justify-between align-bottom">
            <h2 className="flex items-center text-2xl capitalize">
              {pokemon.name}
            </h2>
            <Button
              color={isInFavorites ? "primary" : "success"}
              onClick={toggleSaveFavorites}
            >
              {isInFavorites ? "Delete favorites" : "Save favorites"}
            </Button>
          </div>
          <div className="flex flex-col">
            <p className="text-tiny text-white/80">Sprites:</p>
            <div className="flex flex-row">
              <Image
                alt={pokemon.name}
                className={"self-center"}
                src={`${pokemon.sprites.front_default}`}
                width={100}
                height={100}
              />
              <Image
                alt={pokemon.name}
                className={"self-center"}
                src={`${pokemon.sprites.back_default}`}
                width={100}
                height={100}
              />
              <Image
                alt={pokemon.name}
                className={"self-center"}
                src={`${pokemon.sprites.front_shiny}`}
                width={100}
                height={100}
              />
              <Image
                alt={pokemon.name}
                className={"self-center"}
                src={`${pokemon.sprites.back_shiny}`}
                width={100}
                height={100}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default PokemonPageByName;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokemonApi.get<PokemonListRes>("/pokemon?limit=151");
  const pokemonsName: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonsName.map((name) => ({
      params: { name },
    })),
    // fallback: false, // false or "blocking"
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon =  await pokemonController.pokemonRes(name)

  if (!pokemon) {
    return{
      redirect:{
        destination: "/",
        permanent: false //en falso por si incrementan los pokemons
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 10 // how many times my page validate pokemons info
  };
};
