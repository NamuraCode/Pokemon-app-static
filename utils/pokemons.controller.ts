import { pokemonApi } from "@/api";
import { PokemonData } from "@/interfaces";
import { ParsedUrlQuery } from "querystring";

const pokemonRes = async (params: string ) => {
  try {
    const { data } = await pokemonApi.get<PokemonData>(`/pokemon/${params}`);
    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
    return pokemon;
  } catch (error) {
    console.error(error);
  }
};

export default {
  pokemonRes,
};
