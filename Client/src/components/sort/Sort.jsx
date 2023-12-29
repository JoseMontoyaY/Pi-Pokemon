import { useDispatch } from "react-redux";
import { setSort } from "../../redux/actions/actions";

const Sort = () => {
  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    dispatch(setSort(event.target.value));
  };

  return (
    <div>
      <label htmlFor="pokemon-sort">Sort by:</label>
      <select id="pokemon-sort" onChange={handleSortChange}>
        <option value="">Select Sorting</option>
        <option value="name-asc">Name Ascending</option>
        <option value="name-desc">Name Descending</option>
        <option value="attack-asc">Attack Ascending</option>
        <option value="attack-desc">Attack Descending</option>
      </select>
    </div>
  );
};

export default Sort;
