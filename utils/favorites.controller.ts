const getFavorites = (): number[] => {
  let favorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favorites;
};

const saveInFavorites = (id: number) => {
  console.log(id);

  let favorites = getFavorites();
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokemonId) => pokemonId != id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;
  const favorites = getFavorites();
  return favorites.includes(id);
};

export default {
  saveInFavorites,
  isInFavorites,
};
