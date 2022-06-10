import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import fin from "../assets/financier.jpg";

function Project(props) {
  return (
    <Container sx={{ mt: "100px" }}>
      <Box
        sx={{
          mb: "20px",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          textAlign: "left",
          justifyContent: "flex-start",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box mb={3}>
              <Typography variant="p" color="#676A6A">
                {props.type}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              fontFamily="'Exo', sans-serif"
              color="#00BEEA"
            >
              {props.name}
            </Typography>
            <Typography variant="p">{props.about}</Typography>
            <br></br>
            <a href={props.project} target="_blank">
              <button className="projectBtn1">Visit Project</button>
            </a>
            <a href={props.git} target="_blank">
              <button className="projectBtn2">View Github</button>
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <a href={props.project} target="_blank">
              <img
                className="projectImg"
                style={{ width: "80%", borderRadius: "25px" }}
                src={props.img}
              />
            </a>
          </Grid>
        </Grid>
      </Box>
      <Divider></Divider>
    </Container>
  );
}

export default Project;
