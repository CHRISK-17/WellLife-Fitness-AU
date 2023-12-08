import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: "130px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h4" mb="34px">
        <span className="similar">Watch: </span>
        <span
          style={{ color: "#3021ff", textTransform: "capitalize" }}
          className="similar"
        >
          {name}
        </span>{" "}
        <span className="similar">videos</span>
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography
                variant="h5"
                color="#000"
                sx={{ fontFamily: "Kanit" }}
              >
                {item.video.title}
              </Typography>
              <Typography
                variant="h6"
                color="#000"
                sx={{ fontFamily: "Kanit" }}
                fontStyle="italic"
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
