const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const movieRoutes = require('./routes/movieRouter');
app.use('/', movieRoutes);

app.get('/', (req, res) => {
    res.status(200).json({msg: "Hello World!!!"});
})

app.get('*', (req,res) => {
    res.status(404).json({error: "Page Not Found"});
})
app.listen(8081, () => {
    console.log("Application running");
})