const axios = require("axios");
const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";
const { Pokemon } = require("../db");
const { sequelize } = require("../db");

const getPokemonByName = async (name) => {
  let localPokemon = [];
  localPokemon = await Pokemon.findAll({
    where: {
      name: sequelize.where(
        sequelize.fn("LOWER", sequelize.col("name")),
        "=",
        name
      ),
    },
  });

  let apiPokemon = [];
  try {
    const apiResponse = await axios(`${URL_BASE}${name}`);
    apiPokemon = apiResponse.data ? [apiResponse.data] : [];
  } catch (error) {
    console.error(error);
  }

  const allPokemon = [...localPokemon, ...apiPokemon];

  if (allPokemon.length === 0) {
    return { message: "No Pokemon found with that name" };
  }

  return allPokemon;
};

module.exports = getPokemonByName;
