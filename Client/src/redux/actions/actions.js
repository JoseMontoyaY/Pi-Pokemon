import {
  FETCH_POKEMONS,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  SET_FILTER,
  SET_SORT,
} from "./actionsType";

import axios from "axios";

// const URL = "http://localhost:3001/pokemon/pokemons";

const ITEMS_PER_PAGE = 12; // Number of items per page

// Fetch Pokemon
export const fetchPokemon = () => {
  return async (dispatch) => {
    try {
      // First request to get the list of all pokemons
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=200"
      );
      const pokemonList = response.data.results;

      dispatch(setTotalPages(Math.ceil(response.data.count / 200)));

      // Second request to get detailed information for each pokemon
      const detailedPokemons = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const detailResponse = await axios.get(pokemon.url);
          const data = detailResponse.data;

          return {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
            attack: data.stats.find((stat) => stat.stat.name === "attack")
              .base_stat,
            defense: data.stats.find((stat) => stat.stat.name === "defense")
              .base_stat,
            speed: data.stats.find((stat) => stat.stat.name === "speed")
              .base_stat,
            image: data.sprites.other["official-artwork"].front_default,
            type: data.types.map((type) => type.type.name),
          };
        })
      );

      dispatch({
        type: FETCH_POKEMONS,
        payload: detailedPokemons,
      });
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  };
};

// Set total pages
export const setTotalPages = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  payload: totalPages,
});

export const setCurrentPage = (page) => ({
  type: "SET_CURRENT_PAGE",
  payload: page,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

// Set sort
export const setSort = (sort) => ({
  type: SET_SORT,
  payload: sort,
});
