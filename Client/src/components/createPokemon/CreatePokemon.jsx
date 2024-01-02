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
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={handleCreateNew}>
          Create New +
        </button>
        <button className={style.button}>See Creations</button>
      </div>
    </div>
  );
};

export default CreatePokemon;

// import { useNavigate } from "react-router-dom";
// import style from "./CreatePokemon.module.css";

// const CreatePokemon = () => {
//   const navigate = useNavigate();

//   const handleCreateNew = () => {
//     navigate("/create");
//   };

//   return (
//     <div className={style.container}>
//       <h1>Create Pokemon</h1>
//       <button className={style.button} onClick={handleCreateNew}>
//         Create New +
//       </button>
//       <button className={style.button}>See Creations</button>
//     </div>
//   );
// };

// export default CreatePokemon;
