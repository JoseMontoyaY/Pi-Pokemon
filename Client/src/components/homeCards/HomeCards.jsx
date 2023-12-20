import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../redux/actions/actions";
import HomeCard from "../homeCard/HomeCard";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import style from "./HomeCards.module.css";

const URL = "http://localhost:3001/pokemon/pokemons";

const HomeCards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const navigate = useNavigate();

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(fetchPokemon(URL));
    }
  }, [dispatch]);

  const handleCardClick = (pokemonId) => {
    navigate(`/detail/${pokemonId}`);
  };

  return (
    <div>
      <div className={style.container}>
        {pokemons.map((pokemon) => (
          <HomeCard
            key={pokemon.id}
            pokemon={pokemon}
            onCardClick={() => handleCardClick(pokemon.id)}
          />
        ))}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default HomeCards;
