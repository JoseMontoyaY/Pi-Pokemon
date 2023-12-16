import { useState, useEffect } from "react";
import style from "./HomeCard.module.css";
const borderClasses = [style.borderYellow, style.borderBlue, style.borderRed];

const HomeCard = ({ url, onCardClick }) => {
  //*? random border color logic
  const getRandomBorderClass = () => {
    const randomIndex = Math.floor(Math.random() * borderClasses.length);
    return borderClasses[randomIndex];
  };
  const borderClass = getRandomBorderClass();

  const [basicInfo, setBasicInfo] = useState({
    image: "",
    name: "",
    height: "",
  });

  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBasicInfo({
          image: data.sprites.other["official-artwork"].front_default,
          name: data.name,
          height: data.height,
        });
      } catch (error) {
        console.error("Failed to fetch Pokemon:", error);
      }
    };

    fetchBasicInfo();
  }, [url]);

  return (
    <div className={style.shadowContainer}>
      <div
        className={`${style.cardContainer} ${borderClass}`}
        onClick={() => onCardClick(basicInfo)}>
        <div className={style.cardImage}>
          <img src={basicInfo.image} alt={basicInfo.name} />
        </div>

        <div className={style.cardInfo}>
          <h3>{basicInfo.name}</h3>
          <p>Height: {basicInfo.height}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
