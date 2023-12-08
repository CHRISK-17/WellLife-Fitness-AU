export const ExerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5288f5f2cdmshf14aa3dfaf2c41dp129853jsn6656e7186c9a",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const YoutubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5288f5f2cdmshf14aa3dfaf2c41dp129853jsn6656e7186c9a",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  const reply = await fetch(url, options);
  const app_data = await reply.json();

  return app_data;
};
