//! React?
import { useState, useEffect } from "react";

const HomeCard = ({ url, onCardClick }) => {
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
    <div className="pokemon-card" onClick={() => onCardClick(basicInfo)}>
      <img src={basicInfo.image} alt={basicInfo.name} />
      <h3>{basicInfo.name}</h3>
      <p>Height: {basicInfo.height}</p>
    </div>
  );
};

export default HomeCard;
