// import React from 'react';
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { pokemonInfo } = location.state;

  return (
    <div>
      <img src={pokemonInfo.image} alt={pokemonInfo.name} />
      <h2>{pokemonInfo.name}</h2>
      <p>Height: {pokemonInfo.height}</p>
    </div>
  );
};

export default Detail;
