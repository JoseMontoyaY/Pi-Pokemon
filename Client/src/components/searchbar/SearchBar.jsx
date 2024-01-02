import { useState } from "react";
import style from "./SearchBar.module.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const search = () => {
    navigate("/search");
    onSearch(id);
    setId("");
  };

  return (
    <div className={style.searchContainer}>
      <input
        className={style.searchInput}
        type="search"
        onChange={handleChange}
        value={id}
        placeholder="Enter id or name"
      />
      <button className={style.searchButton} onClick={search}>
        ADD
      </button>
    </div>
  );
}
