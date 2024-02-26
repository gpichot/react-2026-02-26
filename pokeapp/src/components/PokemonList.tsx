import { pokemonsList } from "../mocks";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 10,
      }}
    >
      {pokemonsList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
