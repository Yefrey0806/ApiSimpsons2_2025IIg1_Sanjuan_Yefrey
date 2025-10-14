import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./CardCharacterDetail.css";

const CardCharacterDetail = ({ data }) => {
  return (
    <Card id="card-character-detail" sx={{ width: 400, height: 500 }}>
      <CardActionArea style={{ backgroundColor: "transparent" }}>
        <CardMedia
          component="img"
          height="120"
          image={`https://cdn.thesimpsonsapi.com/500${data.portrait_path}`}
          alt="Image of character"
          sx={{
            objectFit: "contain",
            "&:hover": { transform: "scale(1.1)", transition: "0.5s" },
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="name">{data.name}</div>
            <p className="ocupation">{data.occupation}</p>
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {data.age && <span className="info1">Age:{data.age}</span>}
              <span
                className="info1"
                style={{ color: data.status === "Alive" ? "green" : "red" }}
              >
                {data.status}
              </span>
            </p>
            <br />
            <p className="phrases-per">{data.phrases}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCharacterDetail;
