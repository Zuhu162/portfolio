import {
  Badge,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import me from "../assets/me.jpg";

function About() {
  return (
    <Container id="about">
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "left",
        }}
      >
        <Grid container>
          <Grid item xs={12} mb={10}>
            <Typography fontFamily="'Exo', sans-serif" variant="h4">
              About Me
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={me} style={{ width: "60%", borderRadius: "50%" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ mb: 3 }}
              variant="h5"
              fontFamily="'Poppins', sans-serif"
              fontWeight="bold"
              mt={3}
            >
              Learning Forever 🎓
            </Typography>
            <Stack direction="row" spacing={{ sm: 0, md: 1 }} mb={1}>
              <Chip
                sx={{ color: "black", backgroundColor: "#E6D4FF" }}
                label="HTML"
              />
              <Chip
                sx={{ color: "black", backgroundColor: "#E6D4FF" }}
                label="CSS"
              />
              <Chip
                sx={{ color: "black", backgroundColor: "#E6D4FF" }}
                label="Javascript"
              />
              <Chip
                sx={{ color: "black", backgroundColor: "#E6D4FF" }}
                label="ReactJS"
              />
              <Chip
                sx={{ color: "black", backgroundColor: "#E6D4FF" }}
                label="Redux"
              />
            </Stack>
            <Stack direction="row" spacing={{ xs: 0, md: 1 }} mb={1}>
              <Chip
                sx={{ color: "black", backgroundColor: "#DEF0F2" }}
                label="NodeJS"
              />
              <Chip
                sx={{ color: "black", backgroundColor: "#DEF0F2" }}
                label="MongoDB"
              />
              <Chip
                sx={{ color: "black", backgroundColor: "#DEF0F2" }}
                label="ExpressJS"
              />
              <Chip
                sx={{ color: "black", backgroundColor: "#DEF0F2" }}
                label="Firebase"
              />
            </Stack>
            <Stack direction="row" spacing={{ xs: 0, md: 1 }}>
              <Chip
                sx={{ color: "black", backgroundColor: "#F9FBE6" }}
                label="Photoshop"
              />
              <Chip
                sx={{ color: "black", backgroundColor: "#F9FBE6" }}
                label="Illustrator"
              />
              <br />
              <Chip
                sx={{ color: "black", backgroundColor: "#F9FBE6" }}
                label="After Effects"
              />
            </Stack>
            <Typography fontFamily="'Poppins', sans-serif" variant="h6" mt={3}>
              I'm a first year student at the University of Technology Malaysia,
              pursuing my Bachelor of Computer Science (Software Engineering)
              degree.
              <br />
              Since my childhood I have been tinkering with computers and all
              sorts of technologies, that in some way or another ignited my
              passion towards this career.
            </Typography>
            <a
              href="https://drive.google.com/file/d/1KLu7GCt9y_AWPdRiC_nEzUC1FaxdqsYB/view"
              target="_blank"
            >
              <button className="projectBtn2">Download Résumé</button>
            </a>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ mt: "30px" }}></Divider>
    </Container>
  );
}

export default About;
