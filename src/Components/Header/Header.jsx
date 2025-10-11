import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo-simpsons.png";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="Logo Simpsons" />
      </a>

      <ul>
          <li> <Link to="/Characters">Personajes</Link></li>
          <li> <Link to="/Episodes">Episodios</Link></li>
          <li> <Link to="/Lugares">Lugares</Link></li>
      </ul> 
    </header>
  );
};

export default Header;
