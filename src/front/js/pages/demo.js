import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()

  useEffect(()=>{
	if(!store.token){
		navigate("/")
	}

  },[store.token])

  return (
    <div className="container">
      <h1> demo</h1>

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
