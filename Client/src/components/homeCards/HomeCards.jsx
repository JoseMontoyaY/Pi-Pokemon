import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../redux/actions/actions";
import HomeCard from "../homeCard/HomeCard";
import Pagination from "../Pagination/Pagination";
import Filter from "../filter/Filter";
import Sort from "../sort/Sort";
import style from "./HomeCards.module.css";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 12;

const HomeCards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pokemons = useSelector((state) => state.pokemons);
  const filter = useSelector((state) => state.filter);
  const sort = useSelector((state) => state.sort);
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(fetchPokemon());
    }
  }, [dispatch, pokemons.length]);

  // Apply Filter
  const filteredPokemons = filter
    ? pokemons.filter((pokemon) => pokemon.type.includes(filter))
    : pokemons;

  // Apply Sort
  const sortedPokemons = [...filteredPokemons].sort((a, b) => {
    switch (sort) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "attack-asc":
        return a.attack - b.attack;
      case "attack-desc":
        return b.attack - a.attack;
      default:
        return 0;
    }
  });

  // Pagination Logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPokemons = sortedPokemons.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleCardClick = (pokemonId) => {
    navigate(`/detail/${pokemonId}`);
  };

  return (
    <div>
      <Filter />
      <Sort />
      <div className={style.container}>
        {paginatedPokemons.map((pokemon) => (
          <HomeCard
            key={pokemon.id}
            pokemon={pokemon}
            onCardClick={() => handleCardClick(pokemon.id)}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default HomeCards;
