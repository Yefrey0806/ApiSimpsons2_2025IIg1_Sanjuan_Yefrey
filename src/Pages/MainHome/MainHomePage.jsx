import React from "react";
import "./MainHomePage.css";
import simpsons from "../../assets/img/the-simpsons.jpg";
import { useNavigate } from "react-router-dom";

function MainHomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-simpsons-container">
      <div
        className="home-simpsons-background"
        style={{ backgroundImage: `url(${simpsons})` }}
      ></div>

      <div className="home-simpsons-content">
        <h1 className="home-simpsons-title">Bienvenido a Springfield</h1>
        <p className="home-simpsons-subtitle">
          Explora el mundo de Los Simpson a través de nuestra API interactiva
        </p>

        <button
          className="home-simpsons-button"
          onClick={() => navigate("/Characters")}
        >
          Entra al Mundo Amarillo
        </button>
      </div>
    </div>
  );
}

export default MainHomePage;
