import { useEffect, useState } from "react";
import CardEpisode from "../../Components/CardEpisode/CardEpisode";
import CircularProgress from "@mui/material/CircularProgress";
import "./EpisodesPages.css";
import "animate.css";

const EpisodesPages = () => {
  const [episodesData, setEpisodesData] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/episodes")
      .then((response) => response.json())
      .then((data) => {
        setEpisodesData(data.results);
        setFilteredEpisodes(data.results.slice(0, 10));
      })
      .catch((error) => console.error("Error fetching episode data:", error));
  }, []);

  const handleFilter = (season) => {
    setSelectedSeason(season);

    if (season === "") {

      setFilteredEpisodes(episodesData.slice(0, 10));
    } else {

      const filtered = episodesData
        .filter((ep) => String(ep.season) === String(season))
        .slice(0, 10);
      setFilteredEpisodes(filtered);
    }
  };

  return (
    <div className="content-cards">
      <div
        id="title-cards"
        className="animate_animated animatezoomIn animate_delay-1s"
      >
        <h2>Episodios Clásicos</h2>
        <p>
          Revive los mejores momentos de la familia más divertida de Springfield
        </p>

        <select
          value={selectedSeason}
          onChange={(e) => handleFilter(e.target.value)}
          className="select-season"
        >
          <option value="">Todas las Temporadas</option>
          {Array.from(new Set(episodesData.map((ep) => ep.season))).map(
            (season) => (
              <option key={season} value={season}>
                Temporada {season}
              </option>
            )
          )}
        </select>
      </div>

      <div
        id="content-characters"
        className="animate_animated animatefadeInUp animate_delay-1s"
      >
        {filteredEpisodes.length > 0 ? (
          filteredEpisodes.map((episode) => (
            <CardEpisode key={episode.id} data={episode} />
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default EpisodesPages;
