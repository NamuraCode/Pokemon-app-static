import { FavoritesCard } from "./FavoritesCard";

interface Props {
  pokemons: number[];
}
export const FavoritesList = ({ pokemons }: Props) => {
  return (
    <div className="max-w-[100%] gap-6 grid grid-cols-4 grid-rows-2">
      {pokemons.map((id) => {
        return <FavoritesCard key={id} id={id}/>;
      })}
    </div>
  );
};
