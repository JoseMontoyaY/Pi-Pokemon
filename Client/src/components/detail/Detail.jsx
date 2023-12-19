// import React from 'react';
import { useLocation } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const location = useLocation();
  const { pokemonInfo } = location.state;
  const {
    id,
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
    type,
    borderClass,
  } = pokemonInfo;

  return (
    <div className={style.componentContanier}>
      <div className={style.shadowContainer}>
        <div className={`${style.cardContainer} ${borderClass}`}>
          <h3>{name}</h3>

          <div className={style.cardImage}>
            <img src={image} alt={name} />
          </div>

          <div className={style.cardInfo}>
            <b>Types:</b>
            <ul>
              {type.map((item) => (
                <li key={item.type.name}>{item.type.name}</li>
              ))}
            </ul>
            <p>
              <b>Id:</b> {id}
            </p>
            <p>
              <b>Name:</b> {name}
            </p>
            <p>
              <b>HP:</b> {hp}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
