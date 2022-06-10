import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/system";

function Floater() {
  return (
    <div className="floater">
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          textAlign: "left",
          justifyContent: "space-around",
        }}
      >
        <a href="#home">
          <HomeOutlinedIcon
            className="floaterIcon"
            sx={{
              "&:hover": {
                color: "#DEF0F2",
              },
            }}
          ></HomeOutlinedIcon>
        </a>
        <a href="#about">
          <PermContactCalendarOutlinedIcon
            className="floaterIcon"
            sx={{
              "&:hover": {
                color: "#DEF0F2",
              },
            }}
          ></PermContactCalendarOutlinedIcon>
        </a>
        <a href="#projects">
          <ComputerOutlinedIcon
            className="floaterIcon"
            sx={{
              "&:hover": {
                color: "#E6D4FF",
              },
            }}
          ></ComputerOutlinedIcon>
        </a>

        <a href="https://github.com/Zuhu162" target="_blank">
          <GitHubIcon
            className="floaterIcon"
            sx={{
              "&:hover": {
                color: "#F9FBE6",
              },
            }}
          ></GitHubIcon>
        </a>
        <a href="https://www.linkedin.com/in/zuhayer-siddique/" target="_blank">
          <LinkedInIcon
            className="floaterIcon"
            sx={{
              "&:hover": {
                color: "#F9FBE6",
              },
            }}
          ></LinkedInIcon>
        </a>
      </Box>
    </div>
  );
}

export default Floater;
