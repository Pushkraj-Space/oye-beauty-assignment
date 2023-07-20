const database =  require("./db");
const {ObjectId } = require('mongodb');

let db;
(async () => {
  db = await database();
})();

const collectionName = "movie";

module.exports.getAllMovies = async () => {
  return db.collection(collectionName).find({}).toArray();
};

module.exports.getSingleMovie = async (id) => {
  id = new ObjectId(id);
  return await db.collection(collectionName).find({_id : id}).toArray();
};

module.exports.getMoviesByPagination = async (page,size) => {
  size = parseInt(size);
  page = parseInt(page);
  const toSkip = (page - 1) * size;
  return (
    await db.collection(collectionName)
    .find({})
    .skip(toSkip)
    .limit(size)
    .toArray()
  );
};

module.exports.newMovie = async (movieData) => {
  return db.collection(collectionName).insertOne(movieData);
};