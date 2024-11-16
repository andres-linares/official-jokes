import { useQueries } from "@tanstack/vue-query";
import { computed, ref, watch } from "vue";
import { api } from "../api";
import { QueryKey } from "../constants/queries";
import { Storage } from "../utils/storage";

const FAVORITES_KEY = "favorites";
const PAGE_SIZE = 10;
const favoriteIds = ref(Storage.get<number[]>(FAVORITES_KEY, []));

export const useFavorites = () => {
  const page = ref(1);
  const type = ref("");

  watch(type, () => {
    page.value = 1;
  });

  const favoritesQueries = computed(() => {
    const pageIds = favoriteIds.value.slice(
      (page.value - 1) * PAGE_SIZE,
      page.value * PAGE_SIZE,
    );

    return pageIds.map((id) => {
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
      isSuccess: results.every((result) => result.isSuccess),
    }),
  });

  const jokes = computed(() => {
    if (!type.value) return query.value.data;

    return query.value.data.filter((joke) => joke.type === type.value);
  });

  const total = computed(() => favoriteIds.value.length);

  const addFavorite = (id: number) => {
    favoriteIds.value.push(id);
    Storage.set(FAVORITES_KEY, favoriteIds.value);
  };

  const removeFavorite = (id: number) => {
    favoriteIds.value = favoriteIds.value.filter((jokeId: number) => jokeId !== id);
    Storage.set(FAVORITES_KEY, favoriteIds.value);
  };

  const isFavorite = computed(() => (id: number) => favoriteIds.value.includes(id));

  return {
    page,
    total,
    PAGE_SIZE,
    type,
    query,
    jokes,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};
