import { useNavigate } from "react-router-dom";
import style from "./CreatePokemon.module.css";

const CreatePokemon = () => {
  const navigate = useNavigate();

  const handleCreateNew = () => {
    navigate("/create");
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Create Pokemon</h1>
      <button className={style.button} onClick={handleCreateNew}>
        Create New +
      </button>
    </div>
  );
};

export default CreatePokemon;
