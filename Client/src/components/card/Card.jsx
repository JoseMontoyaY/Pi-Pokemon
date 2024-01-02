import React, { useState, useEffect } from "react";
import style from "./Card.module.css";

export default function Card({
  id,
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  image,
  onRemovePokemon,
}) {
  const borderClasses = [style.borderYellow, style.borderBlue, style.borderRed];
  const [borderClass, setBorderClass] = useState("");
  const getRandomBorderClass = () => {
    const randomIndex = Math.floor(Math.random() * borderClasses.length);
    return borderClasses[randomIndex];
  };

  useEffect(() => {
    setBorderClass(getRandomBorderClass());
  }, []);
  const handleRemove = () => {
    onRemovePokemon(id);
  };
  return (
    <div className={style.shadowContainer}>
      <div className={`${style.cardContainer} ${borderClass}`}>
        <button className={style.removeButton} onClick={handleRemove}>
          X
        </button>
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Attack:</b> {attack}
        </p>

        <div className={style.cardImage}>
          <img src={image} alt={name} />
        </div>

        <div className={style.cardInfo}>
          <p>
            <b>Id:</b> {id}
          </p>
          <p>
            <b>HP:</b> {hp}
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
  );
}
