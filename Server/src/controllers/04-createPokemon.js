const { Pokemon } = require("../db");

const createPokemon = async (pokemonData) => {
  const { name, image, hp, attack, defense, speed, height, weight } =
    pokemonData;

  if (!name || !image || !hp || !attack || !defense)
    throw Error("Missing data");

  const newPokemon = await Pokemon.findOrCreate({
    where: {
      name,
      image,
      hp,
      attack,
      defense,
      speed: speed ? speed : null,
      height: height ? height : null,
      weight: weight ? weight : null,
    },
  });

  return newPokemon;
};

module.exports = createPokemon;
