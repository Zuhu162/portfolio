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
        <Typography variant="subtitle" fontFamily="Poppins">
          Some projects cannot be viewed due to heroku shutting down free
          hosting services. Will be fixed ASAP. Until then feel free to visit
          the GitHub repos.
        </Typography>
        {projects.map((p) => (
          <Project
            type={p.type}
            img={p.img}
            name={p.name}
            about={p.about}
            git={p.github}
            project={p.project}
            btnType={p.btn}
          ></Project>
        ))}
      </Box>
    </Container>
  );
}

export default Projects;
