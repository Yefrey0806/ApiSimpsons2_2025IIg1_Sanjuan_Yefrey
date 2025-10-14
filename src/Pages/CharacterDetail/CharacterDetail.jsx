import { useEffect, useState } from "react";
import CardCharacterDetail from "../../Components/CardCharacterDetail/CardCharacterDetail";
import { useParams, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleBack = () => {
    navigate("/Characters");
  };

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
      <Stack spacing={2} sx={{ alignItems: "center", marginTop: "2rem" }}>
        <Button
          onClick={handleBack}
          variant="contained"
          sx={{
            backgroundColor: "orange",
            borderRadius: "20px",
            width: "120px",
            height: "40px",
            fontWeight: "bold",
            textTransform: "none",
            boxShadow: 3,
            "&:hover": {
              backgroundColor: "GrayText",
              boxShadow: 6,
              transform: "translateY(-2px) scale(1)",
              transition: "all 0.3s",
            },
          }}
        >
          Volver
        </Button>
      </Stack>
    </div>
  );
};

export default CharacterDetail;
