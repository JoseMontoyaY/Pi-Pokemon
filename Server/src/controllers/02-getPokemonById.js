const axios = require("axios");
const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";
const { validate: uuidValidate } = require("uuid");
const { Pokemon } = require("../db");

const getPokemonById = async (id) => {
  if (uuidValidate(id)) {
    const item = await Pokemon.findOne({ where: { id } });
    if (item);
    return item.dataValues;
  }
  const { data } = await axios(`${URL_BASE}${id}`);

  const pokemonData = {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
    attack: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
    defense: data.stats.find((stat) => stat.stat.name === "defense").base_stat,
    speed: data.stats.find((stat) => stat.stat.name === "speed").base_stat,
    image: data.sprites.other["official-artwork"].front_default,
  };
  return pokemonData;
};

module.exports = getPokemonById;
