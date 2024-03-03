import { useParams } from "react-router-dom";
import useFetchResource from "../../../hooks/useFetchResource";
import { PokemonDetail } from "../../../types";

export default function PokemonDetailsPage() {
  const { id } = useParams();
  const query = useFetchResource<PokemonDetail>(
    `https://pokeapi.fly.dev/gpichot-2024-02-26/pokemons/${id}`
  );

  if (query.isLoading) {
    return <p>Chargement en cours</p>;
  }

  const { data: pokemon } = query;

  if (!pokemon || query.error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} height={92} alt={pokemon.image} />
      {pokemon.types.map((type) => (
        <span key={type}>{type}</span>
      ))}
      <table>
        {Object.entries(pokemon.stats).map(([name, value]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
