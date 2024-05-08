const express = require('express')

const router = express.Router();
router.get("/api/movies",(req,res)=>{
    res.status(200).json({ success: true, data: 'Server is running' })
})
module.exports = router