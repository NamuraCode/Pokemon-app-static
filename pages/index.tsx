import { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts";

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
  console.log("Hola mundo");
  
  return {
    props: {
      name: "David",
    },
  };
};

export default Home;
