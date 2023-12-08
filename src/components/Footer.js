import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/new-banner.png";

const Footer = () => {
  return (
    <Box mt="70px" bgcolor="#3021ff">
      <Stack gap="0px" alignItems="center" p="0px" pt="24px">
        <Typography
          variant="h6"
          mt="0px"
          fontStyle="italic"
          fontWeight="550"
          sx={{ fontFamily: "Kanit", color: "#fff" }}
        >
          © 2023 WellLife Fitness AU{" "}
          <Typography
            variant="h6"
            pb="7px"
            mt="0px"
            fontWeight="400"
            fontStyle="italic"
            textAlign="center"
            sx={{ fontFamily: "Kanit" }}
          >
            Made with ❤️ by Ansh
          </Typography>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
