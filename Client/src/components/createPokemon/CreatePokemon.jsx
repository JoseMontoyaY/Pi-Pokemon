import { useNavigate } from "react-router-dom";

const CreatePokemon = () => {
  const navigate = useNavigate();

  const handleCreateNew = () => {
    navigate("/create");
  };

  return (
    <div>
      <h1>Create Pokemon</h1>
      <button onClick={handleCreateNew}>Create New +</button>
      <button>See Creations</button>
    </div>
  );
};

export default CreatePokemon;
