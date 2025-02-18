import { useNavigate } from "react-router";
import { useEffect } from "react";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/"); // Redirect to home after 3 seconds
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong!!</h2>
    </div>
  );
};

export default Error;
