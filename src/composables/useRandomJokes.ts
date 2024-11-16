import { useInfiniteQuery } from "@tanstack/vue-query";
import { api } from "../api";
import { QueryKey } from "../constants/queries";

export const useRandomJokes = () => {
  const query = useInfiniteQuery({
    queryKey: [QueryKey.RANDOM_JOKES],
    queryFn: () => api.getRandomJokes(),
    getNextPageParam: () => 0,
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page),
  });

  return { query };
};
