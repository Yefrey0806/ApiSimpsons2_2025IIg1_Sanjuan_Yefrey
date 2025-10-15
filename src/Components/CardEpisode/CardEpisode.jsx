import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./CardEpisode.css";

const CardEpisode = ({ data }) => {
  return (
    <Card id="card-Episode" sx={{ width: 280, height: 340 }}>
      <CardActionArea style={{ backgroundColor: "transparent" }}>
        <CardMedia
          component="img"
          height="150"
          image={`https://cdn.thesimpsonsapi.com/500${data.image_path}`}
          alt="Episode Image"
          sx={{
            objectFit: "cover",
            "&:hover": { transform: "scale(1.05)", transition: "0.4s" },
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="center">
            <div className="title">{data.name}</div>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} height={"100vh"}>
            <p className="info">
              <strong>Temporada:</strong> {data.season}
            </p>
            <p className="info">
              <strong>Episodio:</strong> {data.episode_number}
            </p>
            <p className="info">
              <strong>Fecha de Lanzamiento:</strong> {data.airdate}
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardEpisode;