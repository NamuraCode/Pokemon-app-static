const getFavorites = (): number[] => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites;
};

const saveInFavorites = (id: number) => {
  let favorites = getFavorites();
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokemonId) => pokemonId != id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isInFavorites = (id: number): boolean => {
  const favorites = getFavorites();
  return favorites.includes(id);
};

export default {
  saveInFavorites,
  isInFavorites,
};
