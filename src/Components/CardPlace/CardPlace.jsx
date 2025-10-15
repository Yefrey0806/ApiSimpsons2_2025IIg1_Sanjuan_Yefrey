import React from "react";
import "./CardPlace.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CardPlace = ({ data }) => {
  return (
    <Card id="card-place" sx={{ width: 270, height: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={`https://cdn.thesimpsonsapi.com/200${data.image_path}`}
          alt="Image of Place"
          sx={{
            objectFit: "contain",
            "&:hover": { transform: "scale(1.1)", transition: "0.5s" },
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="name-place">{data.name}</div>
            <p className="use">{data.use}</p>
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {data.town}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardPlace;
