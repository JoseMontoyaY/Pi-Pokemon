import {
  FETCH_POKEMONS,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  SET_FILTER,
  SET_SORT,
} from "./actions/actionsType";

const initialState = {
  pokemons: [],
  currentPage: 1,
  totalPages: 0,
  filter: null,
  sort: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_SORT:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export default reducer;
