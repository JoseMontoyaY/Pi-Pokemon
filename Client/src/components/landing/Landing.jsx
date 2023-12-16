import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };

  return (
    <div>
      <h1>Welcome to the Pokemon App!</h1>
      <button onClick={goToHomePage}>Log in</button>
      <button>Create account</button>
    </div>
  );
};

export default LandingPage;
