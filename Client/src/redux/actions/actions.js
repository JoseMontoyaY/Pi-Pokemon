import {
  FETCH_POKEMONS,
  SET_TOTAL_PAGES,
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
      const response = await axios.get(
        "http://localhost:3001/pokemon/pokemons"
      );
      const { combinedPokemons, count, combinedPokemonsLength } = response.data;
      console.log(combinedPokemons);
      dispatch(
        setTotalPages(Math.ceil(combinedPokemonsLength / ITEMS_PER_PAGE))
      );
      dispatch({
        type: FETCH_POKEMONS,
        payload: combinedPokemons,
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
