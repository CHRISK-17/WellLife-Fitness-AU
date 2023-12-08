import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "40px", xs: "0" }, p: "20px" }}>
      <Typography variant="h4" mb={5}>
        <span className="similar">Exercises: </span>
        <span
          style={{ color: "#3021ff", textTransform: "capitalize" }}
          className="similar"
        >
          Same Muscle Group
        </span>
      </Typography>
      <Stack direction="row" style={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4" mb={5} className="similar">
        <span className="similar">Exercises: </span>
        <span
          style={{ color: "#3021ff", textTransform: "capitalize" }}
          className="similar"
        >
          Same Equipment
        </span>
      </Typography>
      <Stack direction="row" style={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
