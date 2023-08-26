import { GetStaticPaths, GetStaticProps } from "next";

import { Layout } from "@/components/layouts";
import { pokemonApi } from "@/api";
import { PokemonData } from "@/interfaces";
import { Card, CardBody, Image } from "@nextui-org/react";

interface Props {
  pokemon: PokemonData;
}

const PokemonPage = ({ pokemon }: Props) => {
  return (
    <Layout title={`Pokemon - ${pokemon.id}`}>
      <Card className="py-4">
        <CardBody className="flex overflow-visible py-2">
          <Image src={`${pokemon.sprites.front_default}`}/>
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
