import { useQuery } from "@tanstack/react-query";
import { PokemonDetail } from "../types";

interface PokemonListResponse {
  previousOffset: number | null;
  nextOffset: number | null;
  results: PokemonDetail[];
}

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

export function usePokemonListQuery({ offset = 0 }: { offset?: number } = {}) {
  return useQuery({
    queryKey: ["pokemon-list", { offset }],
    queryFn: async () => {
      const response = await fetch(
        `https://pokeapi.fly.dev/gpichot-2024-02-26/pokemons?offset=${offset}`
      );
      await sleep();
      const json = await response.json();
      return json as PokemonListResponse;
    },
  });
}
