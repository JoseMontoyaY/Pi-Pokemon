import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { pokemonId } = useParams();
  const pokemonInfo = useSelector((state) =>
    state.pokemons.find((pokemon) => pokemon.id.toString() === pokemonId)
  );

  const borderColors = useSelector((state) => state.borderColors);
  const borderColorClass = borderColors[pokemonId];

  if (!pokemonInfo) {
    return <div className={style.loading}>Loading Pokémon details...</div>;
  }

  const { id, name, hp, attack, defense, speed, height, weight, image, type } =
    pokemonInfo;

  return (
    <div className={style.componentContainer}>
      <div className={style.shadowContainer}>
        <div className={`${style.cardContainer} ${borderColorClass}`}>
          <h3>{name}</h3>
          <div className={style.cardImage}>
            <img src={image} alt={name} />
          </div>
          <div className={style.cardInfo}>
            <b>ID:</b> <span>{id}</span>
            <b>HP:</b> <span>{hp}</span>
            <b>Attack:</b> <span>{attack}</span>
            <b>Defense:</b> <span>{defense}</span>
            <b>Speed:</b> <span>{speed}</span>
            <b>Height:</b> <span>{height} dm</span>
            <b>Weight:</b> <span>{weight} hg</span>
            <b>Types:</b>
            <ul>
              {type.map((t, index) => (
                <li key={index}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
