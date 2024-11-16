import { useQuery } from "@tanstack/vue-query";
import { api } from "../api";

export const useRandomJokes = () => {
  const query = useQuery({
    queryKey: ["random-jokes"],
    queryFn: () => api.getRandomJokes(),
  });

  return { query };
};
