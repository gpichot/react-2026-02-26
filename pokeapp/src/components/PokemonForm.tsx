import { useState } from "react";
import InputControl from "./InputControl";

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
      <InputControl
        label="Name"
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <InputControl
        label="Type"
        name="type"
        type="text"
        value={type}
        onChange={(event) => setType(event.target.value)}
      />
      <InputControl
        label="Weight"
        name="weight"
        type="number"
        value={weight}
        onChange={(event) => setWeight(event.target.valueAsNumber)}
      />
      <InputControl
        label="Height"
        name="height"
        type="number"
        value={height}
        onChange={(event) => setHeight(event.target.valueAsNumber)}
      />
      <button type="submit">Create</button>
    </form>
  );
}
