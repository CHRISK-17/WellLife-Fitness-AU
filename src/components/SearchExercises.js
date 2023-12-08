import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { ExerciseOptions, FetchData } from "../utils/FetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [BodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercises = async () => {
      const bodyPartsData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        ExerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercises();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1324",
        ExerciseOptions
      );

      console.log(exercisesData);

      const searchExercise = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchExercise);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" }, fontFamily: "Kanit" }}
        mb="50px"
        textAlign="center"
      >
        Explore Fantastic Exercises
        <br />
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#3021ff",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
            fontFamily: "Kanit",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={BodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart
        />
        <Typography
          sx={{ textAlign: "center", fontFamily: "Kanit" }}
          variant="h4"
          fontWeight="600"
          fontStyle="italic"
        >
          Based on search results
        </Typography>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
