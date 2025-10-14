import { useEffect, useState } from "react";
import CardCharacter from "../../Components/CardCharacter/CardCharacter";
import CircularProgress from "@mui/material/CircularProgress";
import "./CharactersPages.css";
import "animate.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CharactersPages = () => {
  const [characterData, setCharacterData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalPages = 5;

  useEffect(() => {
    setLoading(true);
    fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacterData(data.results);
      })
      .catch((error) => console.error("Error fetching character data:", error))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="content-cards" key={`${page}`}>
      <div
        id="title-cards"
        className="animate__animated animate__zoomIn animate__delay-0.5"
      >
        <h2>Personajes Populares</h2>
        <p>Conoce algunos de los personajes más emblemáticos de Springfield</p>
      </div>

      <div
        id="content-characters"
        className="animate__animated animate__fadeInUp animate__delay-0.8s"
      >
        {loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          characterData.map((character) => (
            <CardCharacter key={character.id} data={character} />
          ))
        )}
      </div>

      <Stack
        spacing={2}
        alignItems="center"
        className="animate__animated animate__zoomIn animate__delay-1s"
      >
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          onChange={(event, value) => {
            setLoading(true);
            setPage(value);
          }}
        />
      </Stack>
    </div>
  );
};

export default CharactersPages;
