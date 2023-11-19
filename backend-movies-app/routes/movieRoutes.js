const express = require("express");
const router = express.Router();
const Movie = require("../models/movieModel");

router.post("/add_movie", async (req, res) => {
  try {
    const newMovie = new Movie(req.body);

    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: "Could not add the movie" });
  }
});

// Route to get all movies
router.get("/get_all", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve movies" });
  }
});

module.exports = router;
