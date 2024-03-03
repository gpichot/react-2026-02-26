import { useMutation, useQueryClient } from "@tanstack/react-query";

interface PokemonData {
  id: string;
  name: string;
  editLink: string;
  types: string[];
  weight: number;
  height: number;
}

// type PokemonCreationPayload = Pick<PokemonData, "name" | "weight" | "height">;

interface PokemonCreatePayload {
  name: string;
  type: string;
  weight: number;
  height: number;
}

export function useCreatePokemonMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: PokemonCreatePayload) => {
      const response = await fetch(
        "https://pokeapi.fly.dev/gpichot-2024-02-26/pokemons",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();
      return json;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["pokemon-list"],
      });
    },
  });
}
