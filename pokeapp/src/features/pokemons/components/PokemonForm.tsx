import React, { useState } from "react";
import InputControl from "../../../components/InputControl";
import { useNavigate } from "react-router-dom";
import { RouterUrls } from "../../../router-urls";

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
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload: PokemonCreatePayload = {
      name,
      type,
      weight,
      height,
    };
    console.log(payload);

    navigate(RouterUrls.homepage());
  };

  const isFormValid = name && type;

  const inputRef = React.useRef<HTMLInputElement>(null);
  // inputRef.current?.focus(), inputRef.current?.getBoundingClientRect()

  return (
    <form
      onSubmit={onSubmit}
      style={{
        margin: "0 auto",
        maxWidth: 300,
      }}
    >
      <InputControl
        label="Name"
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        inputRef={inputRef}
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

      <button type="submit" disabled={!isFormValid}>
        Create
      </button>
    </form>
  );
}
