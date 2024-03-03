import React, { useState } from "react";
import InputControl from "../../../components/InputControl";
import { useNavigate } from "react-router-dom";
import { RouterUrls } from "../../../router-urls";
import { useCreatePokemonMutation } from "../../../api-hooks/mutations";

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
  const mutation = useCreatePokemonMutation();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload: PokemonCreatePayload = {
      name,
      type,
      weight,
      height,
    };
    console.log(payload);

    mutation.mutate(payload, {
      onSuccess() {
        navigate(RouterUrls.homepage());
      },
    });
  };

  const isFormValid = name && type;

  type InputRefs = {
    name: HTMLInputElement | null;
    type: HTMLInputElement | null;
    weight: HTMLInputElement | null;
    height: HTMLInputElement | null;
  };
  const inputRef = React.useRef<InputRefs>({
    name: null,
    type: null,
    weight: null,
    height: null,
  });

  return (
    <form
      onSubmit={onSubmit}
      style={{
        margin: "0 auto",
        maxWidth: 300,
      }}
    >
      {/*<button type="button" onClick={() => inputRef.current.name?.focus()}>
        Focus name
      </button>
      <button type="button" onClick={() => inputRef.current.type?.focus()}>
        Focus type
      </button>
      <button type="button" onClick={() => inputRef.current.height?.focus()}>
        Focus height
    </button>*/}
      <InputControl
        label="Name"
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        inputRef={(ref) => (inputRef.current.name = ref)}
      />
      <InputControl
        label="Type"
        name="type"
        type="text"
        value={type}
        onChange={(event) => setType(event.target.value)}
        inputRef={(ref) => (inputRef.current.type = ref)}
        onBlur={() => {
          inputRef.current.name?.focus();
        }}
      />
      <InputControl
        label="Weight"
        name="weight"
        type="number"
        value={weight}
        onChange={(event) => setWeight(event.target.valueAsNumber)}
        inputRef={(ref) => (inputRef.current.weight = ref)}
      />
      <InputControl
        label="Height"
        name="height"
        type="number"
        value={height}
        onChange={(event) => setHeight(event.target.valueAsNumber)}
        inputRef={(ref) => (inputRef.current.height = ref)}
      />

      <button type="submit" disabled={!isFormValid || mutation.isPending}>
        Create
      </button>
    </form>
  );
}
