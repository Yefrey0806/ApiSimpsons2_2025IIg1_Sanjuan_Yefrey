import { useEffect, useState } from "react";
import CardCharacter from "../../Components/CardCharacter/CardCharacter";
import CircularProgress from "@mui/material/CircularProgress";
import "./CharactersPages.css";
import "animate.css";

const CharactersPages = () => {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacterData(data.results))
      .catch((error) => console.error("Error fetching character data:", error));
  }, []);

  return (
    <div class="content-cards">
      <div class="animate__animated animate__zoomIn animate__delay-1s">
        <h2>Personajes Populares</h2>
        <p>Conoce algunos de los personajes más emblemáticos de Springfield</p>
      </div>

      <div id="characters-container" class="animate__animated animate__fadeInUp animate__delay-1s">
        {characterData.length > 0 ? (
          characterData.map((character) => (
            <CardCharacter key={character.id} data={character} />
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default CharactersPages;
