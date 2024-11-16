import { useQuery } from "@tanstack/vue-query";
import { QueryKey } from "../constants/queries";
import { api } from "../api";

export const useJokeTypes = () => {
  const query = useQuery({
    queryKey: [QueryKey.JOKE_TYPES],
    queryFn: () => api.getJokeTypes(),
  });

  return { query };
};
