import React, { useEffect, useState } from "react";
import CardPlace from "../../Components/CardPlace/CardPlace";
import CircularProgress from "@mui/material/CircularProgress";
import "./PlacesPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "animate.css";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPages = 5;

  useEffect(() => {
    setLoading(true);
    fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`)
      .then((response) => response.json())
      .then((data) => setPlaces(data.results))
      .catch((error) => console.error("Error fetching character data:", error))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="places-cards" key={`${page}`}>
      <div
        id="title-places"
        className="animate__animated animate__zoomIn animate__delay-0.5"
      >
        <h2>Lugares Icónicos de Springfield</h2>
        <br />
        <p>
          Explora los escenarios más recordados del universo de Los Simpson{" "}
        </p>
      </div>
      <div
        id="content-places"
        className="animate__animated animate__fadeInUp animate__delay-0.8s"
      >
        {loading ? (
          <CircularProgress />
        ) : (
          places.map((place) => <CardPlace key={place.id} data={place} />)
        )}
      </div>
      <div>
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
    </div>
  );
};

export default PlacesPage;
