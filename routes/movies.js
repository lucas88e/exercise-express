const express = require('express')

const data = require("../data")
const movies = data.movies
const router = express.Router();
router.get("/api/movies",(req,res)=>{
    res.json(movies)
})
module.exports = router