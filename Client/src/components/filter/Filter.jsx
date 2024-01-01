import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, setCurrentPage } from "../../redux/actions/actions"; // Import setCurrentPage action

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
    <div>
      <div>
        <label htmlFor="pokemon-type-filter">Filter by Type:</label>
        <select id="pokemon-type-filter" onChange={handleFilterChange}>
          <option value="">All Types</option>
          {pokemonTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="pokemon-source-filter">Filter by Source:</label>
        <select id="pokemon-source-filter" onChange={handleSourceChange}>
          <option value="">All Sources</option>
          <option value="api">API</option>
          <option value="db">Database</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
