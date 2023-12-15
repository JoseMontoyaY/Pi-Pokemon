import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const search = () => {
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
