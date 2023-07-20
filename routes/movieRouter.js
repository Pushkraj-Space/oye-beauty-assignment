const express = require("express");
const movieController = require("../controller/movieController");

const router = express.Router();

router.get("/get-all", movieController.getAllMovies);

router.get("/get-single", movieController.getSingleMovie);

router.get("/get-paginated", movieController.getMoviesByPagination);

router.post("/add-movie", movieController.newMovie);

module.exports = router;