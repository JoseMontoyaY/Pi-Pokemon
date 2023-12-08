const axios = require("axios");
const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";
const { validate: uuidValidate } = require("uuid");
const { Pokemon } = require("../db");

const getPokemonById = async (id) => {
  if (uuidValidate(id)) {
    const item = await Pokemon.findOne({ where: { id } });
    if (item) return item;
  }
  const response = await axios(`${URL_BASE}${id}`);
  return response.data;
};

module.exports = getPokemonById;
