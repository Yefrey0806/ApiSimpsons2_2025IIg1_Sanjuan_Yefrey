import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="home-simpsons-footer">
      <p className="title_author">
        © {new Date().getFullYear()} Proyecto API Simpsons — Desarrollado por{" "}
        <span className="home-simpsons-author">
          Yefrey Sanjuan & Yhonatan Calderon
        </span>
      </p>

      <div className="home-simpsons-socials">
        <a
          href="https://www.thesimpsonsapi.com/"
          target="_blank"
          rel="noreferrer"
        >
          API Oficial
        </a>
        <a
          href="https://github.com/Yefrey0806/ApiSimpsons_2025IIg1_Sanjuan_Yefrey"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
