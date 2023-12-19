const { Pokemon } = require("../db");

const createPokemon = async (pokemonData) => {
  const { name, image, hp, attack, defense, speed, height, weight, types } =
    pokemonData;

  if (!name || !image || !hp || !attack || !defense) {
    throw new Error("Missing required data");
  }

  const newPokemon = await Pokemon.create({
    name,
    image,
    hp,
    attack,
    defense,
    speed: speed || null,
    height: height || null,
    weight: weight || null,
  });

  newPokemon.addPokemonTypes(types);

  return newPokemon;
};

module.exports = createPokemon;
