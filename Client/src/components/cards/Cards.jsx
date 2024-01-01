import Card from "../card/Card";
import style from "./Cards.module.css";

export default function Cards({ pokemon }) {
  return (
    <div className={style.container}>
      {pokemon.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          hp={pokemon.hp}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
          height={pokemon.height}
          weight={pokemon.weight}
          image={pokemon.image}
        />
      ))}
    </div>
  );
}
