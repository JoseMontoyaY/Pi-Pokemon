import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import Favorites from "./components/favorites/Favorites";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Home from "./components/home/Home";
import LandingPage from "./components/landing/Landing";
import CreateFrom from "./components/createForm/CreateForm";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const URL = `http://localhost:3001/pokemon/`;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // -----> ONSEARCH FUNCTION <-----
  const onSearch = async (id) => {
    if (!id) alert("Please enter a pokemon id or name");
    if (pokemon.find((pokemon) => pokemon.id === parseInt(id)))
      return alert("This pokemon is already being showned");

    try {
      const { data } = await axios(`${URL}pokemons/${id}`);
      const pokemonData = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
        attack: data.stats.find((stat) => stat.stat.name === "attack")
          .base_stat,
        defense: data.stats.find((stat) => stat.stat.name === "defense")
          .base_stat,
        speed: data.stats.find((stat) => stat.stat.name === "speed").base_stat,
        image: data.sprites.other["official-artwork"].front_default,
      };
      console.log(pokemonData);
      setPokemon((oldState) => [...oldState, pokemonData]);
    } catch (error) {
      alert(error.response.data);
    }
  };
  // -----> LOGIN FUNCTION <-----

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Cards pokemon={pokemon} />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateFrom />} />
      </Routes>
    </div>
  );
}

export default App;
