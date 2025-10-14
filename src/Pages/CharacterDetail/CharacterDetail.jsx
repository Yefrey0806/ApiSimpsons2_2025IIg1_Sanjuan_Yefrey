import { useEffect, useState } from "react";
import CardCharacterDetail from "../../Components/CardCharacterDetail/CardCharacterDetail";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const CharacterDetail = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacterData(data);
      })
      .catch((error) => console.error("Error fetching character data:", error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div id="content-character-id">
      <div>
        {loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          characterData && (
            <CardCharacterDetail key={characterData.id} data={characterData} />
          )
        )}
      </div>
    </div>
  );
};

export default CharacterDetail;
