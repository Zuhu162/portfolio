import { Button, Card, Divider, Typography } from "@mui/material";
import { Box, Container, width } from "@mui/system";
import React from "react";
import jumbo from "../assets/jumbo.png";
import Clouds from "./clouds";

function Jumbo() {
  return (
    <Box
      id="home"
      sx={{
        backgroundColor: "#111117",
        backgroundImage: `url(${jumbo})`,
        backgroundSize: {
          xs: "500%",
          sm: "300%",
          md: "200%",
          lg: "contain",
          xl: "contain",
        },
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "90vh",
        marginTop: "-80px",
        marginBottom: "100px",
      }}
    >
      <Box
        className="jumbo"
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "left",
        }}
      >
        <Box>
          <Clouds></Clouds>
        </Box>
        <Container>
          <Box sx={{ marginBottom: "10px", color: "#614085" }}>
            <Typography fontFamily="'Exo', sans-serif" variant="p">
              Hi, my name is
            </Typography>
          </Box>
          <Box sx={{ color: "white" }}>
            <Typography fontFamily="'Exo', sans-serif" variant="h3">
              Zuhayer Adnan Siddique
            </Typography>
            <Typography fontFamily="'Poppins', sans-serif" variant="h4">
              MERN Stack Developer
            </Typography>
            <Typography fontFamily="'Poppins', sans-serif" variant="p">
              Learning | Exploring | Creating
            </Typography>
          </Box>
          <br></br>
          <a href="#projects">
            <button className="projectBtn1 ">View Projects</button>
          </a>
        </Container>
      </Box>
      <Divider></Divider>
    </Box>
  );
}

export default Jumbo;
