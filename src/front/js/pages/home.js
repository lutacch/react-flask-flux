import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (actions.login(email, password)) {
      navigate("/single");
    }
  };

  return (
    <div className="text-center mt-5">
      <h1>LOGIN TEST</h1>

      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresa tu email"
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingresa tu contraseña"
      ></input>
      <button onClick={handleClick}>Logeate</button>
    </div>
  );
};
