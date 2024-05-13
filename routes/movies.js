const express = require('express')

const { validate } = require('../middleware/validation')
const { generateUniqueId } = require('../utils')
const { movies } = require('../data')

const { movieBodySchema } = require('../validators/movies')
const { idParamSchema } = require('../validators/commons')

const router = express.Router()

const ENTITY_NAME = 'Movie'

router.get('/', (req, res) => {
	res.json(Object.values(movies))
})

router.get(
	'/:id',
	idParamSchema(ENTITY_NAME),
	validate,
	(req, res) => {
		const movie = movies[req.params.id]

		if (!movie) {
			return res
				.status(404)
				.json({ error: `${ENTITY_NAME} not found` })
		}

		res.json(movie)
	}
)

router.post('/', movieBodySchema, validate, (req, res) => {
	const id = generateUniqueId()

	const { title, year, genreId, director } = req.body
	const newMovie = { id, title, year, genreId, director }

	movies[newMovieId] = newMovie

	res.status(201).json(newMovie)
})

router.put(
	'/:id',
	idParamSchema('Movie'),
	movieBodySchema,
	validate,
	(req, res) => {
		const { id } = req.params
		const updatedMovieData = req.body

		const movie = movies[id]

		if (!movie) {
			return res
				.status(404)
				.json({ error: `${ENTITY_NAME} not found` })
		}

		movies[id] = { ...movie, ...updatedMovieData }

		res.json(movies[id])
	}
)

router.delete(
	'/:id',
	idParamSchema(ENTITY_NAME),
	validate,
	(req, res) => {
		const { id } = req.params
		const movie = movies[id]

		if (!movie) {
			return res
				.status(404)
				.json({ error: `${ENTITY_NAME} not found` })
		}

		delete movies[id]

		res.status(200).send(movie)
	}
)

module.exports = router
