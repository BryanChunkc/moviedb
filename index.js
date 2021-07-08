const fetch = require("node-fetch");
const express = require("express");
const app = express();

app.get("/getmovie", async (req, res) => {
  const url =
    "https://api.themoviedb.org/3/movie/76341?api_key=113c7f5dffed89574dffaa2a18ff9ce0";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.send({ data });
  console.log(data);
});

app.listen(3000, () => {
  console.log("listening 3000");
});
