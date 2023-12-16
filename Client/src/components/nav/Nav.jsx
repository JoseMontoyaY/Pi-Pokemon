import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div className={style.container}>
      <SearchBar onSearch={onSearch} />
      <Link to="/home">
        <span>Home</span>
      </Link>
      <Link to="/favorites">
        <span>Favorites</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
    </div>
  );
}
