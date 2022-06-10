import { Button, Card, Divider, Typography } from "@mui/material";
import { Box, Container, width } from "@mui/system";
import React from "react";
import jumbo from "../assets/jumbo.svg";

function Jumbo() {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${jumbo})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "90vh",
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
          <Typography fontFamily="'Exo', sans-serif" variant="h3">
            Hi, I'm Zuhayer Adnan Siddique
          </Typography>
          <Typography variant="h4">MERN Stack Developer</Typography>
          <Typography variant="p">Learning | Exploring | Creating </Typography>
          <br></br>
          <a href="#projects">
            <button className="projectBtn1 ">View Projects</button>
          </a>
        </Container>
      </Box>
      <Divider sx={{ mt: "20px" }}></Divider>
    </div>
  );
}

export default Jumbo;
