import style from "./HomeCard.module.css";

const borderClasses = [style.borderYellow, style.borderBlue, style.borderRed];

const HomeCard = ({ pokemon, onCardClick }) => {
  const getRandomBorderClass = () => {
    const randomIndex = Math.floor(Math.random() * borderClasses.length);
    return borderClasses[randomIndex];
  };

  const borderClass = getRandomBorderClass();

  return (
    <div className={style.shadowContainer} onClick={() => onCardClick(pokemon)}>
      <div className={`${style.cardContainer} ${borderClass}`}>
        {pokemon.name && <h3>{pokemon.name}</h3>}
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
