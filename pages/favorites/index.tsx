import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { FavoritesList } from "@/components/ui/FavoritesList";
import { favoritesController } from "@/utils";
import { useEffect, useState } from "react";

const Favorites = () => {
  const [pokemons, setPokemons] = useState<number[]>([]);
  useEffect(() => {
    setPokemons(favoritesController.getFavorites());
  }, []);
  return (
    <Layout title="Pokémons - favorites">
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesList pokemons={pokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
