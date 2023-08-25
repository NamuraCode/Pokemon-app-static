import { GetStaticPaths, GetStaticProps } from "next";

import { Layout } from "@/components/layouts";

interface Props {
  id: number;
  name: string;
}

const PokemonPage = ({ id, name }: Props) => {
  return (
    <Layout title={`Pokemon - ${name}`}>
      <h1>
        {id} - {name}
      </h1>
    </Layout>
  );
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "1",
        }
      },
      {
        params: {
          id: "2",
        }
      },
      {
        params: {
          id: "3",
        }
      },
      {
        params: {
          id: "4",
        }
      },
    ],
    fallback: false, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  //   const { data } = await pokemonApi.get<PokemonListRes>("/pokemon?limit=151");

  return {
    props: {
      id: 1,
      name: "Bulbasaur",
    },
  };
};
