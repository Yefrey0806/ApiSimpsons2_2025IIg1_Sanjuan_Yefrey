import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./CardCharacter.css";
import { Link } from "react-router-dom";

const phrasesCharacters = {
  4: 1,
  7: 1,
  10: 2,
};

const CardCharacter = ({ data }) => {
  return (
    <Link
      to={`/Characters/${data.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card id="card-Characters" sx={{ width: 270, height: 320 }}>
        <CardActionArea >
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
                syile={{
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
              <p className="phrases">
                {data.phrases && data.phrases.length > 0
                  ? data.phrases[
                      phrasesCharacters[data.id] !== undefined
                        ? phrasesCharacters[data.id]
                        : 0
                    ] ?? " "
                  : " "}
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardCharacter;
