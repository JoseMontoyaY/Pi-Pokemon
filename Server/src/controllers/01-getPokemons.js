const axios = require("axios");
const { Pokemon, PokemonType } = require("../db");

const URL_BASE = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";

const getPokemons = async () => {
  const apiResponse = await axios(URL_BASE);
  const apiPokemons = apiResponse.data.results;

  const detailedPokemons = await Promise.all(
    apiPokemons.map(async (pokemon) => {
      const detailResponse = await axios.get(pokemon.url);
      const data = detailResponse.data;

      return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
        attack: data.stats.find((stat) => stat.stat.name === "attack")
          .base_stat,
        defense: data.stats.find((stat) => stat.stat.name === "defense")
          .base_stat,
        speed: data.stats.find((stat) => stat.stat.name === "speed").base_stat,
        image: data.sprites.other["official-artwork"].front_default,
        type: data.types.map((type) => type.type.name),
      };
    })
  );

  const dbPokemons = await Pokemon.findAll({
    include: [
      {
        model: PokemonType,
        through: { attributes: [] },
      },
    ],
  });

  const simplifiedDbPokemons = dbPokemons.map((pokemon) => {
    const { PokemonTypes, ...rest } = pokemon.get({ plain: true });
    return {
      ...rest,
      type: PokemonTypes.map((type) => type.name), // Ensure this matches the API structure
    };
  });

  const combinedPokemons = [...detailedPokemons, ...simplifiedDbPokemons];

  return {
    combinedPokemons: combinedPokemons,
    combinedPokemonsLength: combinedPokemons.length,
    count: apiResponse.data.count,
  };
};

module.exports = getPokemons;
