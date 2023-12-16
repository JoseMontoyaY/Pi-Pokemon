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
    <div>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        placeholder="Enter id or name"
      />
      <button onClick={search}>ADD</button>
    </div>
  );
}
