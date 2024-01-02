import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBorderColor } from "../../redux/actions/actions";
import style from "./HomeCard.module.css";

const HomeCard = ({ pokemon, onCardClick }) => {
  const dispatch = useDispatch();
  const borderColors = useSelector((state) => state.borderColors);

  // Function to get a random border class
  const getRandomBorderClass = () => {
    const borderClasses = [
      style.borderYellow,
      style.borderBlue,
      style.borderRed,
      style.borderGreen,
      style.borderGrey,
      style.borderPurple,
      style.borderPink,
      style.borderGold,
    ];
    const randomIndex = Math.floor(Math.random() * borderClasses.length);
    return borderClasses[randomIndex];
  };

  useEffect(() => {
    let borderClass = borderColors[pokemon.id];
    if (!borderClass) {
      borderClass = getRandomBorderClass();
      dispatch(setBorderColor(pokemon.id, borderClass));
    }
  }, [pokemon.id, borderColors, dispatch]);

  const borderClass = borderColors[pokemon.id];
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div
      className={`${style.cardContainer} ${borderClass}`}
      onClick={() => onCardClick(pokemon)}>
      <div className={style.cardImage}>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>

      <div className={style.cardInfo}>
        <div className={style.cardName}>{capitalize(pokemon.name)}</div>
        <div className={style.cardDetails}>
          <p>
            <b>Attack:</b> {pokemon.attack}
          </p>
          <div>
            <b>Types: </b>
            <span className={style.typeList}>{pokemon.type.join(" - ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
