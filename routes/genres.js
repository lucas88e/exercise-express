const express = require('express')
const router = express.Router();
const data = require("../data")

const genres= data.genres

router.get("/api/genres",(req,res)=>{
    res.json(genres)
})
module.exports = router