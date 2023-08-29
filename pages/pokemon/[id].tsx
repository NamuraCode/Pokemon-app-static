import { GetStaticPaths, GetStaticProps } from "next";

import { Layout } from "@/components/layouts";
import { pokemonApi } from "@/api";
import { PokemonData } from "@/interfaces";
import { Button, Card, CardBody, Image, Spacer } from "@nextui-org/react";

interface Props {
  pokemon: PokemonData;
}

const PokemonPage = ({ pokemon }: Props) => {
  return (
    <Layout title={`Pokemon - ${pokemon.id}`}>
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
            <h2 className="flex items-center text-2xl capitalize">{pokemon.name}</h2>
            <Button color={"primary"}>Save favorites</Button>
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

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberPokemons = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: numberPokemons.map((id) => ({
      params: { id },
    })),
    fallback: false, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokemonApi.get<PokemonData>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data,
    },
  };
};
