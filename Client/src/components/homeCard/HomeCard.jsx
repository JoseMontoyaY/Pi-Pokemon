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

  return (
    <div className={style.shadowContainer} onClick={() => onCardClick(pokemon)}>
      <div className={`${style.cardContainer} ${borderClass}`}>
        {pokemon.name && <h3>{pokemon.name}</h3>}
        {pokemon.attack && <h3>{pokemon.attack}</h3>}
        {pokemon.image && (
          <div className={style.cardImage}>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        )}

        {pokemon.type && pokemon.type.length > 0 && (
          <div className={style.cardInfo}>
            <b>Types:</b>
            <ul>
              {pokemon.type.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCard;
