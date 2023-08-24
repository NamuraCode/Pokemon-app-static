import { GetStaticPaths } from "next";

import { Layout } from "@/components/layouts";

interface Props {
  id: number;
  name: string;
}
export const PokemonPage = ({ id, name }: Props) => {
  return (
    <Layout title={`Pokemon - ${name}`}>
      <h1>
        {id} - {name}
      </h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [
        {
          params: {
            name: 'next.js',
          },
        }, // See the "paths" section below
      ],
      fallback: true, // false or "blocking"
    }
  }
