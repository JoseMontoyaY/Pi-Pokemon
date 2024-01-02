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
  const onSearch = async (searchTerm) => {
    if (!searchTerm) return alert("Please enter a pokemon id or name");

    let url = isNaN(searchTerm)
      ? `${URL}/name?name=${searchTerm}`
      : `${URL}pokemons/${searchTerm}`;

    try {
      const { data } = await axios(url);

      // Check if data is an array (multiple results) or an object (single result)
      if (Array.isArray(data)) {
        data.forEach((pokemonData) => {
          if (!pokemon.some((p) => p.id === pokemonData.id)) {
            setPokemon((oldState) => [...oldState, pokemonData]);
          }
        });
      } else {
        if (!pokemon.some((p) => p.id === data.id)) {
          setPokemon((oldState) => [...oldState, data]);
        } else {
          alert("This pokemon is already being shown");
        }
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // -----> REMOVE POKEMON FUNCTION <-----
  function removePokemon(id) {
    setPokemon(pokemon.filter((p) => p.id !== id));
  }

  // -----> LOGIN FUNCTION <-----

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/search"
          element={<Cards pokemon={pokemon} onRemovePokemon={removePokemon} />}
        />
        <Route path="/detail/:pokemonId" element={<Detail />} />{" "}
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateFrom />} />
      </Routes>
    </div>
  );
}

export default App;
