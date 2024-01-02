import { useState } from "react";
import axios from "axios";
import styles from "./CreateForm.module.css";
import { validateName, validateStat } from "./validation";

const pokemonTypes = [
  { id: 1, name: "normal" },
  { id: 2, name: "fighting" },
  { id: 3, name: "flying" },
  { id: 4, name: "poison" },
  { id: 5, name: "ground" },
  { id: 6, name: "rock" },
  { id: 7, name: "bug" },
  { id: 8, name: "ghost" },
  { id: 9, name: "steel" },
  { id: 10, name: "fire" },
  { id: 11, name: "water" },
  { id: 12, name: "grass" },
  { id: 13, name: "electric" },
  { id: 14, name: "psychic" },
  { id: 15, name: "ice" },
  { id: 16, name: "dragon" },
  { id: 17, name: "dark" },
  { id: 18, name: "fairy" },
  { id: 19, name: "unknown" },
  { id: 20, name: "shadow" },
];

const CreateForm = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "types") {
      let newTypes = checked
        ? [...pokemon.types, value]
        : pokemon.types.filter((type) => type !== value);
      setPokemon({ ...pokemon, types: newTypes });
    } else {
      setPokemon({ ...pokemon, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateName(pokemon.name);
    if (nameError) {
      alert(nameError);
      return;
    }

    const stats = ["hp", "attack", "defense", "speed", "height", "weight"];
    for (let stat of stats) {
      const statError = validateStat(pokemon[stat], stat);
      if (statError) {
        alert(statError);
        return;
      }
    }

    const payload = {
      ...pokemon,
      types: pokemon.types.map(
        (name) => pokemonTypes.find((type) => type.name === name).id
      ),
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/pokemon/pokemons",
        payload
      );
      if (response.status === 200) {
        alert("Pokemon created successfully");
        setPokemon({
          name: "",
          image: "",
          hp: "",
          attack: "",
          defense: "",
          speed: "",
          height: "",
          weight: "",
          types: [],
        });
      } else {
        alert("Error creating Pokemon");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating Pokemon");
    }
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={pokemon.name}
          onChange={handleChange}
          className={styles.inputField}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={pokemon.image}
          onChange={handleChange}
          className={styles.inputField}
        />

        <input
          type="text"
          name="hp"
          placeholder="HP"
          value={pokemon.hp}
          onChange={handleChange}
          className={styles.inputField}
        />

        <input
          type="number"
          name="attack"
          placeholder="Attack"
          value={pokemon.attack}
          onChange={handleChange}
          className={styles.inputField}
        />

        <input
          type="number"
          name="defense"
          placeholder="Defense"
          value={pokemon.defense}
          onChange={handleChange}
          className={styles.inputField}
        />

        <input
          type="number"
          name="speed"
          placeholder="Speed (optional)"
          value={pokemon.speed}
          onChange={handleChange}
          className={styles.inputField}
        />

        <input
          type="number"
          name="height"
          placeholder="Height (optional)"
          value={pokemon.height}
          onChange={handleChange}
          className={styles.inputField}
        />

        <input
          type="number"
          name="weight"
          placeholder="Weight (optional)"
          value={pokemon.weight}
          onChange={handleChange}
          className={styles.inputField}
        />

        <div className={styles.dropdown}>
          <div className={styles.dropdownButton} onClick={toggleDropdown}>
            Select Types
          </div>
          {showDropdown && (
            <div
              className={`${styles.dropdownContent} ${
                showDropdown ? styles.show : ""
              }`}>
              <div className={styles.dropdownGrid}>
                {pokemonTypes.map((type) => (
                  <label key={type.id}>
                    <input
                      type="checkbox"
                      value={type.name}
                      checked={pokemon.types.includes(type.name)}
                      onChange={handleChange}
                      name="types"
                    />
                    {type.name}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        <button type="submit" className={styles.submitButton}>
          Create Pokémon
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
