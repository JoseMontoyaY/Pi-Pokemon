const axios = require("axios");
const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";
const { Pokemon } = require("../db");
const { sequelize } = require("../db");

const getPokemonByName = async (name) => {
  let localPokemon = await Pokemon.findAll({
    where: {
      name: sequelize.where(
        sequelize.fn("LOWER", sequelize.col("name")),
        "=",
        name.toLowerCase()
      ),
    },
  });

  // Convert Sequelize models to plain objects
  localPokemon = localPokemon.map((pokemon) => pokemon.get({ plain: true }));

  let apiPokemon = [];
  try {
    const { data } = await axios(`${URL_BASE}${name.toLowerCase()}`);
    const pokemonData = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
      attack: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
      defense: data.stats.find((stat) => stat.stat.name === "defense")
        .base_stat,
      speed: data.stats.find((stat) => stat.stat.name === "speed").base_stat,
      image: data.sprites.other["official-artwork"].front_default,
    };
    apiPokemon = pokemonData ? [pokemonData] : [];
  } catch (error) {
    console.error("API error: ", error.message);
    // API call failed, proceed with localPokemon only
  }

  const allPokemon = [...localPokemon, ...apiPokemon];

  if (allPokemon.length === 0) {
    return { message: "No Pokemon found with that name" };
  }

  console.log(allPokemon);
  return allPokemon;
};

module.exports = getPokemonByName;
