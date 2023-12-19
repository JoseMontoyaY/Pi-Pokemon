import { useState, useEffect } from "react";
import style from "./HomeCard.module.css";
import axios from "axios";
const borderClasses = [style.borderYellow, style.borderBlue, style.borderRed];

const HomeCard = ({ url, onCardClick }) => {
  // Random border color logic
  const getRandomBorderClass = () => {
    const randomIndex = Math.floor(Math.random() * borderClasses.length);
    return borderClasses[randomIndex];
  };
  const borderClass = getRandomBorderClass();

  const [basicInfo, setBasicInfo] = useState({});

  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const { data } = await axios(url);
        const pokemonData = {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
          attack: data.stats.find((stat) => stat.stat.name === "attack")
            .base_stat,
          defense: data.stats.find((stat) => stat.stat.name === "defense")
            .base_stat,
          speed: data.stats.find((stat) => stat.stat.name === "speed")
            .base_stat,
          image: data.sprites.other["official-artwork"].front_default,
          type: data.types,
          borderClass,
        };
        setBasicInfo(pokemonData);
      } catch (error) {
        console.error("Failed to fetch Pokemon:", error);
      }
    };

    fetchBasicInfo();
  }, []);

  return (
    <div className={style.shadowContainer}>
      <div
        className={`${style.cardContainer} ${borderClass}`}
        onClick={() => onCardClick(basicInfo)}>
        {basicInfo.name && <h3>{basicInfo.name}</h3>}
        {basicInfo.image && (
          <div className={style.cardImage}>
            <img src={basicInfo.image} alt={basicInfo.name} />
          </div>
        )}

        {basicInfo.type && basicInfo.type.length > 0 && (
          <div className={style.cardInfo}>
            <b>Types:</b>
            <ul>
              {basicInfo.type.map((item) => (
                <li key={item.type.name}>{item.type.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCard;
