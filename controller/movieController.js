const Movie = require("../models/movieModel");


module.exports.getAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.getAllMovies();
    res.status(200).json(allMovies);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.getSingleMovie = async (req, res) => {
  const {id} = req.query;
  try {
    const movieData = await Movie.getSingleMovie(id);
    res.status(200).json(movieData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.getMoviesByPagination = async (req, res) => {
  const {page,size} = req.query;
  try {
    const moviesData = await Movie.getMoviesByPagination(page,size);
    res.status(200).json(moviesData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.newMovie = async (req, res) => {
  const movieData = req.body;
  try {
    const newMovie = await Movie.newMovie(movieData);
    res.status(201).json(newMovie);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};