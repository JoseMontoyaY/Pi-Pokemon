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

  const { id, name, hp, attack, defense, speed, height, weight, image, type } =
    pokemonInfo;
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className={style.componentContainer}>
      <div className={`${style.cardContainer} ${borderColorClass}`}>
        <div className={style.cardImage}>
          <img src={image} alt={name} />
        </div>

        <div className={style.cardInfo}>
          <div className={style.cardName}>{capitalize(name)}</div>
          <div className={style.cardDetails}>
            <p>
              <b>Id:</b> {id}
            </p>
            <p>
              <b>Attack:</b> {attack}
            </p>
            <p>
              <b>Defense:</b> {defense}
            </p>
            <p>
              <b>Speed:</b> {speed}
            </p>
            <p>
              <b>Height:</b> {height}
            </p>
            <p>
              <b>Weight:</b> {weight}
            </p>
            <div>
              <b>Types: </b>
              <span className={style.typeList}>{type.join(" - ")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
