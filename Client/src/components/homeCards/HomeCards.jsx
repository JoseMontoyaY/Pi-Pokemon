import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../redux/actions/actions";
import HomeCard from "../homeCard/HomeCard";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3001/pokemon/pokemons";

const HomeCards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPokemon(URL));
  }, [dispatch]);

  const handleCardClick = (pokemonInfo) => {
    navigate("/detail", { pokemonInfo });
  };

  return (
    <div>
      {pokemons.map((pokemon) => (
        <HomeCard
          key={pokemon.name}
          url={pokemon.url}
          onCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default HomeCards;

// import { useSelector } from "react-redux";
// import HomeCard from "../homeCard/HomeCard";
// import { useNavigate } from "react-router-dom";

// const HomeCards = () => {
//   const pokemons = useSelector((state) => state.pokemons);
//   console.log(pokemons);
//   const navigate = useNavigate();

//   const handleCardClick = (pokemonInfo) => {
//     navigate("/detail", { pokemonInfo });
//   };

//   return (
//     <div>
//       {pokemons.map((pokemon) => (
//         <HomeCard
//           key={pokemon.name}
//           url={pokemon.url}
//           onCardClick={handleCardClick}
//         />
//       ))}
//     </div>
//   );
// };

// export default HomeCards;
