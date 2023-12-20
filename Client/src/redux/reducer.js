import {
  FETCH_POKEMONS,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
} from "./actions/actionsType";

const initialState = {
  pokemons: [], // This will now hold detailed information for each Pokemon
  currentPage: 1,
  totalPages: 0,
  nextPageUrl: null,
  previousPageUrl: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      // Updating the pokemons state with detailed Pokemon information
      return { ...state, pokemons: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case SET_NEXT_PAGE:
      return { ...state, nextPageUrl: action.payload };
    case SET_PREVIOUS_PAGE:
      return { ...state, previousPageUrl: action.payload };
    default:
      return state;
  }
};

export default reducer;
