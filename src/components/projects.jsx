import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Project from "./project";
import projects from "../projectDets";

function Projects() {
  return (
    <Container id="projects" sx={{ mt: "100px" }}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          textAlign: "left",
        }}
      >
        <Typography variant="h4" fontFamily="'Exo', sans-serif">
          Featured Projects
        </Typography>
        {projects.map((p) => (
          <Project
            type={p.type}
            img={p.img}
            name={p.name}
            about={p.about}
            git={p.github}
            project={p.project}
          ></Project>
        ))}
      </Box>
    </Container>
  );
}

export default Projects;
