const express = require('express')

const { movies } = require('../data.js')

const router = express.Router()

router.get('/', (req, res) => {
	res.json(movies)
})

module.exports = router
