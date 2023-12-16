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
    dispatch(fetchPokemon(URL));
  }, [dispatch]);

  const handleCardClick = (pokemonInfo) => {
    navigate("/detail", { state: { pokemonInfo } });
  };

  return (
    <div>
      <div className={style.container}>
        {pokemons.map((pokemon) => (
          <HomeCard
            key={pokemon.name}
            url={pokemon.url}
            onCardClick={handleCardClick}
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
