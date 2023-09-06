import { pokemonApi } from "@/api";
import { PokemonData } from "@/interfaces";
import { ParsedUrlQuery } from "querystring";

const pokemonRes = async (params: ParsedUrlQuery | undefined ) => {
  try {
    const { name } = params as { name: string };
    const { data } = await pokemonApi.get<PokemonData>(`/pokemon/${name}`);
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
