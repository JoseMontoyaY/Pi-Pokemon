const { Router } = require("express");
const getPokemons = require("../controllers/01-getPokemons");
const getPokemonById = require("../controllers/02-getPokemonById");
const getPokemonByName = require("../controllers/03-getPokemonByName");
const createPokemon = require("../controllers/04-createPokemon");
const getTypes = require("../controllers/05-getTypes");
const postBulkTypes = require("../controllers/07-postBulkTypes");
const { json } = require("body-parser");

const router = Router();

//? Get All pokemon or get pokemon by name
router.get("/pokemons", async (req, res) => {
  try {
    const { name } = req.query;
    const pokemon = name ? await getPokemonByName(name) : await getPokemons();
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: "Unable to obtain data" });
  }
});

//? Get pokemon by id
router.get("/pokemons/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await getPokemonById(id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).json({ error: error.message });
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
    const { name, image, hp, attack, defense, speed, height, weight } =
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

/*
📍GET | "/pokemons"
Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
📍 GET | "/pokemons/:idPokemon"
Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
El pokemon es recibido por parámetro (ID).
Tiene que incluir los datos del tipo de pokemon al que está asociado.
Debe funcionar tanto para los pokemones de la API como para los de la base de datos.
📍 GET | "/pokemons/name?="...""
Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el pokemon, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.
📍 POST | "/pokemons"
Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
Toda la información debe ser recibida por body.
Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).
📍 GET | "/types"
Obtiene un arreglo con todos los tipos de pokemones.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos 
para su posterior consumo desde allí.
*/
