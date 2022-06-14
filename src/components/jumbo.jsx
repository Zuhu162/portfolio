import { Button, Card, Divider, Typography } from "@mui/material";
import { Box, Container, width } from "@mui/system";
import React from "react";
import jumbo from "../assets/jumbo.png";

function Jumbo() {
  return (
    <div
      id="home"
      style={{
        backgroundColor: "#111117",
        backgroundImage: `url(${jumbo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "88vh",
        marginTop: "-70px",
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
        <Container>
          <Box sx={{ marginBottom: "10px", color: "#01BEEA" }}>
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
    </div>
  );
}

export default Jumbo;
