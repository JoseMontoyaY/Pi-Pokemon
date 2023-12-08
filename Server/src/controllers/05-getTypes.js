const axios = require("axios");
const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";
const URL_TYPES = "https://pokeapi.co/api/v2/type";

const getTypes = async () => {
  const response = await axios(`${URL_TYPES}`);
  const types = response.data.results.map((obj) => obj.name);
  return types;
};

module.exports = getTypes;
