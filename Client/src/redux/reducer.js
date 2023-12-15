import {
  FETCH_POKEMONS,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
} from "./actions/actionsType";

const initialState = {
  pokemons: [],
  currentPage: 1,
  totalPages: 0,
  nextPageUrl: null,
  previousPageUrl: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POKEMONS:
      return { ...state, pokemons: payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: payload };
    case SET_NEXT_PAGE:
      return { ...state, nextPageUrl: payload };
    case SET_PREVIOUS_PAGE:
      return { ...state, previousPageUrl: payload };
    default:
      return state;
  }
};

export default reducer;
