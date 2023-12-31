const { Router } = require("express");
const getPokemons = require("../controllers/01-getPokemons");
const getPokemonById = require("../controllers/02-getPokemonById");
const getPokemonByName = require("../controllers/03-getPokemonByName");
const createPokemon = require("../controllers/04-createPokemon");
const getTypes = require("../controllers/05-getTypes");
const postBulkTypes = require("../controllers/07-postBulkTypes");
const { json } = require("body-parser");

const router = Router();

//? GET All pokemon
router.get("/pokemons", async (req, res) => {
  try {
    const pokemon = await getPokemons();
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: "Unable to obtain data" });
  }
});

//? GET pokemon by id
router.get("/pokemons/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await getPokemonById(id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

//? GET pokemons by name
router.get("/name", async (req, res) => {
  const { name } = req.query;
  const searchName = name.toLowerCase();

  try {
    const pokemon = await getPokemonByName(searchName);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//? Get pokemon types
router.get("/types", async (req, res) => {
  try {
    const types = await getTypes();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: "Unable to obtain types" });
  }
});

//? POST pokemon
router.post("/pokemons", async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types } =
      req.body;
    const newPokemon = await createPokemon({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
    });
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//? Fills the PokemonTypes table
router.post("/typesBulk", async (req, res) => {
  try {
    const types = await getTypes();
    const postedTypes = await postBulkTypes(types);
    console.log(postedTypes);
    res.status(200).json(postedTypes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
