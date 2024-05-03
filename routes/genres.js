const express = require('express')

const { genres } = require('../data')
const { generateUniqueId } = require('../utils')

const router = express.Router()

router.get('/', (req, res) => {
	res.json(genres)
})

router.get('/:id', (req, res) => {
	// Your code here
})

router.post('/', (req, res) => {
	// Your code here
})

router.put('/:id', (req, res) => {
	const { id } = req.params
	const updatedGenreData = req.body

	const genreIndex = genres.findIndex((genre) => genre.id === id)

	if (genreIndex === -1) {
		return res.status(404).json({ error: 'Genre not found' })
	}

	genres[genreIndex] = { id, ...req.body }

	res.json(genres[genreIndex])
})

router.delete('/:id', (req, res) => {
	const { id } = req.params
	const genreIndex = genres.findIndex((genre) => genre.id === id)

	if (genreIndex === -1) {
		return res.status(404).json({ error: 'Genre not found' })
	}

	const deletedGenre = genres.splice(genreIndex, 1)[0]

	res.status(204).json(deletedGenre)
})

module.exports = router
