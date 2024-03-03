import { useSearchParams } from "react-router-dom";
import { usePokemonListQuery } from "../../../api-hooks/queries";
import PokemonCard from "./PokemonCard";
import React from "react";

const MemoizedPokemonCard = React.memo(PokemonCard);

export default function PokemonList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get("offset") || 0;
  const query = usePokemonListQuery({ offset });

  if (query.isLoading) {
    return <p>Chargement en cours</p>;
  }

  if (query.error || !query.data) {
    return <p>Erreur</p>;
  }

  const pokemons = query.data.results;

  const handleNext = () => {
    setSearchParams({ offset: query.data.nextOffset });
  };
  const handlePrevious = () => {
    setSearchParams({ offset: query.data.previousOffset });
  };

  return (
    <div>
      {query.isFetching && "Rafraichissement en arrière plan"}
      <button type="button" onClick={handlePrevious}>
        Previous
      </button>
      <button type="button" onClick={handleNext}>
        Next
      </button>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
        }}
      >
        {pokemons.map((pokemon) => (
          <MemoizedPokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
