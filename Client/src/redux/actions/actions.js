import {
  FETCH_POKEMONS,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
} from "./actionsType";

import axios from "axios";

const URL = "http://localhost:3001/pokemon/pokemons";

// Fetch Pokemon
export const fetchPokemon = (url) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch(setTotalPages(Math.ceil(data.count / 12)));
      dispatch(setNextPage(data.next));
      dispatch(setPreviousPage(data.previous));

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await axios(pokemon.url);
          const data = response.data;

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

// Set current page
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

// Set total pages
export const setTotalPages = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  payload: totalPages,
});

// Set next page
export const setNextPage = (nextPageUrl) => ({
  type: SET_NEXT_PAGE,
  payload: nextPageUrl,
});

// Set previous page
export const setPreviousPage = (prevPageUrl) => ({
  type: SET_PREVIOUS_PAGE,
  payload: prevPageUrl,
});
