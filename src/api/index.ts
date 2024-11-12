import { Joke } from "../types/joke";
import { fetcher } from "./fetcher";

export const api = {
  getRandomJoke: () => fetcher.get<Joke>("random_joke"),
  getRandomJokes: () => fetcher.get<Joke[]>("random_ten"),
  getRandomJokesByType: (type: string) => fetcher.get<Joke[]>(`jokes/${type}/ten`),
  getJokeById: (id: number) => fetcher.get<Joke>(`jokes/${id}`),
  getJokeTypes: () => fetcher.get<string[]>("types"),
};
