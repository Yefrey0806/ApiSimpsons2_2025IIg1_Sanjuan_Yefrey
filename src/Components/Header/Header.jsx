import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo-simpsons.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/MainHome">
          <img src={logo} alt="Logo Simpsons" />
        </Link>
      </div>

      <ul>
        <li>
          {" "}
          <Link to="/Characters">Personajes</Link>
        </li>
        <li>
          {" "}
          <Link to="/Episodes">Episodios</Link>
        </li>
        <li>
          {" "}
          <Link to="/Places">Lugares</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
