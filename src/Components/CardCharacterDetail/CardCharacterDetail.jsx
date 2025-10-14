import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./CardCharacterDetail.css";
import { Box } from "@mui/material";

const CardCharacterDetail = ({ data }) => {
  return (
    <Box id="container-box" component="div">
      <Card id="card-character-detail" sx={{ width: 550 }}>
        <CardActionArea style={{ backgroundColor: "transparent" }}>
          <CardMedia
            component="img"
            height="150"
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
              <div className="ocupation">{data.occupation}</div>
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              <div
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
              </div>
              <br />
              <div>
                {data.phrases && data.phrases.length > 0 && (
                  <div>
                    <strong>Frases:</strong>
                    <div className="container-phrases">
                      <ul className="phrases-per">
                        {data.phrases.slice(0, 10).map((phrase, i) => (
                          <li key={i}>{"- " + phrase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {data.first_appearance_ep && (
        <div className="info-id">
          <Typography variant="h5" fontFamily={"cursive"} fontWeight={"bold"}>
            Primera aparición en episodio
          </Typography>
          <img
            src={`https://cdn.thesimpsonsapi.com/200${data.first_appearance_ep.image_path}`}
            alt={"Image"}
            style={{
              height: "200px",
              borderRadius: "40px",
              margin: "2rem",
            }}
          />
          <Typography
            variant="subtitle1"
            fontSize={"1rem"}
            fontFamily={"revert"}
          >
            <h4> {data.first_appearance_ep.name}</h4>
            <br />
            <p>
              <strong>Description:</strong>{" "}
              {data.first_appearance_ep.description}
            </p>
            <br />
            <p>
              <strong>Synopsis:</strong>{" "}
              {data.first_appearance_ep.synopsis}
            </p>  
          </Typography>
        </div>
      )}
    </Box>
  );
};

export default CardCharacterDetail;
