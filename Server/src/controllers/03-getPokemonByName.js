const axios = require("axios");
const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonByName = async (name) => {
  const response = await axios(`${URL_BASE}${name}`);
  return response.data;
};

module.exports = getPokemonByName;
