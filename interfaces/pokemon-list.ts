export interface PokemonListRes {
    count:    number;
    next?:     string;
    previous?: string;
    results:  smallPokemon[];
}

export interface smallPokemon {
    name: string;
    url:  string;
}
