import {
  FETCH_POKEMONS,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
} from "./actionsType";
import axios from "axios";

const URL = "http://localhost:3001/pokemon/pokemons";

export const fetchPokemon = (url) => {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: FETCH_POKEMONS,
      payload: data.results,
    });
    dispatch(setTotalPages(Math.ceil(data.count / 12)));
    dispatch(setNextPage(data.next));
    dispatch(setPreviousPage(data.previous));
  };
};

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setTotalPages = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  payload: totalPages,
});

export const setNextPage = (nextPageUrl) => ({
  type: SET_NEXT_PAGE,
  payload: nextPageUrl,
});

export const setPreviousPage = (prevPageUrl) => ({
  type: SET_PREVIOUS_PAGE,
  payload: prevPageUrl,
});

// dispatch(fetchPokemon(URL));

// export const fetchPokemons = (url) => {
//     return (dispatch) => {
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 dispatch({
//                     type: FETCH_POKEMONS,
//                     payload: data.results
//                 });
//                 dispatch(setTotalPages(Math.ceil(data.count / 12)));
//                 dispatch(setNextPage(data.next));
//                 dispatch(setPreviousPage(data.previous));
//             });
//     };
// };
