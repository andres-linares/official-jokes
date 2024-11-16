import { useInfiniteQuery } from "@tanstack/vue-query";
import { api } from "../api";
import { QueryKey } from "../constants/queries";
import { ref } from "vue";

export const useRandomJokes = () => {
  const type = ref("");

  const query = useInfiniteQuery({
    queryKey: [QueryKey.RANDOM_JOKES, type],
    queryFn: () =>
      type.value ? api.getRandomJokesByType(type.value) : api.getRandomJokes(),
    getNextPageParam: () => 0,
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page),
  });

  return { query, type };
};
