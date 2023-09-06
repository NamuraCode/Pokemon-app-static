import { pokemonApi } from "@/api";
import { PokemonData } from "@/interfaces";

const pokemonRes = async (params: string) => {
  const { data } = await pokemonApi.get<PokemonData>(`/pokemon/${params}`);
  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
  return pokemon;
};

export default {
  pokemonRes,
};
