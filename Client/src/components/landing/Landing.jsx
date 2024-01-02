import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";
import pokemonLogo from "../../assets/pokemon-logo.svg";

const LandingPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };

  return (
    <div className={style.container}>
      <img className={style.pokemonLogo} src={pokemonLogo} alt="pokemon logo" />
      <h1>Welcome to the Pokemon App!</h1>
      <button className={style.button} onClick={goToHomePage}>
        Enter
      </button>
    </div>
  );
};

export default LandingPage;
