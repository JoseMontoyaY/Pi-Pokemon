import HomeCards from "../homeCards/HomeCards";
import CreatePokemon from "../createPokemon/CreatePokemon";
import style from "./Home.module.css";
import pokemonLogo from "../../assets/pokemon-logo.svg";

const HomePage = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <img src={pokemonLogo} alt="" className={style.pokemonLogo} />
        <CreatePokemon />
      </div>

      <div className={style.cards}>
        <HomeCards />
      </div>
    </div>
  );
};

export default HomePage;
