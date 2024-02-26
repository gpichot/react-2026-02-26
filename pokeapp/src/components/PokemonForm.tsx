import { useState } from "react";

export interface PokemonCreatePayload {
  name: string;
  type: string;
  weight: number;
  height: number;
}

export default function PokemonForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload: PokemonCreatePayload = {
      name,
      type,
      weight,
      height,
    };
    console.log(payload);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Type:
          <input
            type="text"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={(event) => setWeight(event.target.valueAsNumber)}
          />
        </label>
      </div>
      <div>
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.valueAsNumber)}
          />
        </label>
      </div>
      <button type="submit">Create</button>
    </form>
  );
}
