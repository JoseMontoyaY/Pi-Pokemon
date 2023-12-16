import HomeCards from "../homeCards/HomeCards";
import CreatePokemon from "../createPokemon/CreatePokemon";
import style from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={style.container}>
      <h1>Home Page</h1>
      <CreatePokemon />
      <HomeCards />
    </div>
  );
};

export default HomePage;
