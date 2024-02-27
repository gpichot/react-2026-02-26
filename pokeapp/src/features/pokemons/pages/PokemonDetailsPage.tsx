import { useParams } from "react-router-dom";
import { pokemonsList } from "../mocks";

export default function PokemonDetailsPage() {
  const { id } = useParams();

  const pokemon = pokemonsList.find((x) => x.id === Number(id));

  if (!pokemon) {
    return <h1>Pokemon not found</h1>;
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
