const axios = require("axios");
const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async () => {
  const response = await axios(URL_BASE);
  return response.data;
};

module.exports = getPokemons;
