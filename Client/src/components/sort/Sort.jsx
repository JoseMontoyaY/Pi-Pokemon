import { useDispatch } from "react-redux";
import { setSort } from "../../redux/actions/actions";
import style from "./Sort.module.css";

const Sort = () => {
  const dispatch = useDispatch();

  const handleNameSortChange = (event) => {
    dispatch(setSort(event.target.value));
  };

  const handleAttackSortChange = (event) => {
    dispatch(setSort(event.target.value));
  };

  return (
    <div className={style.container}>
      <div>
        <label htmlFor="name-sort">Sort by Name:</label>
        <select id="name-sort" onChange={handleNameSortChange}>
          <option value="">Default</option>
          <option value="name-asc">Ascending</option>
          <option value="name-desc">Descending</option>
        </select>
      </div>

      <div>
        <label htmlFor="attack-sort">Sort by Attack:</label>
        <select id="attack-sort" onChange={handleAttackSortChange}>
          <option value="">Default</option>
          <option value="attack-asc">Ascending</option>
          <option value="attack-desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;

// import { useDispatch } from "react-redux";
// import { setSort } from "../../redux/actions/actions";

// const Sort = () => {
//   const dispatch = useDispatch();

//   const handleSortChange = (event) => {
//     dispatch(setSort(event.target.value));
//   };

//   return (
//     <div>
//       <label htmlFor="pokemon-sort">Sort by:</label>
//       <select id="pokemon-sort" onChange={handleSortChange}>
//         <option value="">Select Sorting</option>
//         <option value="name-asc">Name Ascending</option>
//         <option value="name-desc">Name Descending</option>
//         <option value="attack-asc">Attack Ascending</option>
//         <option value="attack-desc">Attack Descending</option>
//       </select>
//     </div>
//   );
// };

// export default Sort;
