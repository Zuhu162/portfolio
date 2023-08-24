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
              <Typography
                fontFamily="'Poppins', sans-serif"
                variant="p"
                color="#676A6A"
              >
                {props.type}
              </Typography>
            </Box>
            <Typography
              variant="h4"
              fontFamily="'Exo', sans-serif"
              color="#614085"
            >
              {props.name}
            </Typography>
            <Typography fontFamily="'Poppins', sans-serif" variant="p">
              {props.about}
            </Typography>
            <br></br>
            {props.project ? (
              <a href={props.project} target="_blank">
                <button className={props.btnType}>Visit Project</button>
              </a>
            ) : (
              <button className={props.btnType}>Visit Project</button>
            )}

            <a href={props.git} target="_blank">
              <button className="projectBtn2">View Github</button>
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
              <a href={props.project} target="_blank">
                <img
                  className="projectImg"
                  style={{ width: "100%", borderRadius: "25px" }}
                  src={props.img}
                />
              </a>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider></Divider>
    </Container>
  );
}

export default Project;
