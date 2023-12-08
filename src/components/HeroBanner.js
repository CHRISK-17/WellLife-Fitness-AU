import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/pexels-tree-of-life-seeds-3577288.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#3021ff"
        fontWeight="600"
        fontSize="26px"
        sx={{ fontFamily: "Kanit" }}
      >
        WellLife Fitness AU
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" }, fontFamily: "Kanit" }}
        mb="23px"
        mt="30px"
      >
        Push, Persevere, <br /> and Repeat
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="25px"
        mb={4}
        sx={{ fontFamily: "Kanit" }}
      >
        Explore the most impactful workout routines
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        className="routine"
        sx={{
          backgroundColor: "#3021ff",
          padding: "10px",
          fontFamily: "Kanit",
        }}
      >
        Explore Routines
      </Button>
      <Typography
        fontWeight="600"
        color="#3021ff"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
          fontFamily: "Kanit",
        }}
      >
        /WORK
      </Typography>
      <img src={HeroBannerImage} className="hero-banner-img" alt="banner" />
    </Box>
  );
};

export default HeroBanner;
