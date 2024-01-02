import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import pokeballSVG from "../../assets/Pokeball-Svg.svg";

export default function Nav({ onSearch }) {
  return (
    <div className={style.container}>
      <div className={style.linksContainer}>
        <Link className={style.link} to="/home">
          <span>Home</span>
        </Link>
        <Link className={style.link} to="/favorites">
          <span>Favorites</span>
        </Link>
        <Link className={style.link} to="/about">
          <span>About</span>
        </Link>
      </div>
      <img src={pokeballSVG} alt="pokeball" className={style.pokeball} />
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
