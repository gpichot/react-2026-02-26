import { useState } from "react";
import { PokemonDetail } from "../types";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        boxShadow: isHovered ? "0 0 10px 3px #385cff" : "none",
      }}
    >
      <img src={pokemon.image} alt={pokemon.name} className={styles.image} />
      <h2 className={styles.name}>{pokemon.name}</h2>
      <div className={styles.types}>
        {pokemon.types.map((type) => (
          <span key={type} className={styles.type}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}
