import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, setCurrentPage } from "../../redux/actions/actions";
import style from "./Filter.module.css";

const Filter = ({ onSourceFilterChange }) => {
  const dispatch = useDispatch();

  const pokemonTypes = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];
  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
    dispatch(setCurrentPage(1));
  };

  const handleSourceChange = (event) => {
    onSourceFilterChange(event.target.value);
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={style.container}>
      <div>
        <label htmlFor="pokemon-type-filter">Filter by Type:</label>
        <select
          className={style.select}
          id="pokemon-type-filter"
          onChange={handleFilterChange}>
          <option value="">All</option>
          {pokemonTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="pokemon-source-filter">Filter by Source:</label>
        <select
          className={style.select}
          id="pokemon-source-filter"
          onChange={handleSourceChange}>
          <option value="">All</option>
          <option value="api">API</option>
          <option value="db">Database</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
