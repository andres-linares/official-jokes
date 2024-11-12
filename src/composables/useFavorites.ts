import { ref } from "vue";

const FAVORITES_KEY = "favorites";

export const useFavorites = () => {
  const favoriteIds = ref(
    JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"),
  );

  const addFavorite = (id: number) => {
    favoriteIds.value.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds.value));
  };

  const removeFavorite = (id: number) => {
    favoriteIds.value = favoriteIds.value.filter(
      (jokeId: number) => jokeId !== id,
    );
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds.value));
  };

  return { addFavorite, removeFavorite };
};
