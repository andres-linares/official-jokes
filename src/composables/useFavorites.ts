import { useQueries } from "@tanstack/vue-query";
import { computed, ref } from "vue";
import { api } from "../api";
import { QueryKey } from "../constants/queries";

const FAVORITES_KEY = "favorites";

export const useFavorites = () => {
  const page = ref(1);

  const favoriteIds = ref(
    JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]") as number[],
  );

  const favoritesQueries = computed(() => {
    return favoriteIds.value.map((id) => {
      return {
        queryKey: [QueryKey.FAVORITE_JOKE, id],
        queryFn: () => api.getJokeById(id),
      };
    });
  });

  const query = useQueries({
    queries: favoritesQueries,
    combine: (results) => ({
      data: results.filter((result) => !!result.data).map((result) => result.data),
    }),
  });

  const addFavorite = (id: number) => {
    favoriteIds.value.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds.value));
  };

  const removeFavorite = (id: number) => {
    favoriteIds.value = favoriteIds.value.filter((jokeId: number) => jokeId !== id);

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds.value));
  };

  const isFavorite = computed(() => (id: number) => favoriteIds.value.includes(id));

  return { query, addFavorite, removeFavorite, isFavorite };
};
