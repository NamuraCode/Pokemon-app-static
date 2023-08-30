const getFavorites =():number[] =>{
    let favorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]")
    return favorites
}

const saveInFavorites = (id: number) => {
  console.log(id);

  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokemonId) => pokemonId != id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isInFavorites = (id: number): boolean => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(id);
};

export default {
  saveInFavorites,
};
