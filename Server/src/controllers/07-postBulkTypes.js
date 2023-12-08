const { PokemonType } = require("../db");

const postBulkTypes = async (types) => {
  const typesToPost = types.map((name) => ({ name }));
  console.log(typesToPost);
  const posted = await PokemonType.bulkCreate(typesToPost);
  return posted;
};

module.exports = postBulkTypes;
