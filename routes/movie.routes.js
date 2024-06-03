const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/search", async (req, res) => {
  const movieName = req.query.q;
  const apiKey = "2833dce9";
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
    movieName
  )}`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from OMDb API:", error);
    res.status(500).json({ error: "Error fetching data from OMDb API" });
  }
});

module.exports = router;
