import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions/actions";

const Filter = () => {
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
  };

  return (
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
  );
};

export default Filter;
