const express = require('express')

const { validate } = require('../middleware/validation')
const { generateUniqueId } = require('../utils')
const { genres } = require('../data')

const { genreBodySchema } = require('../validators/genres')
const { idParamSchema } = require('../validators/commons')

const router = express.Router()

const ENTITY_NAME = 'Genre'

router.get('/', (req, res) => {
	res.json(Object.values(genres))
})

router.get(
	'/:id',
	idParamSchema(ENTITY_NAME),
	validate,
	(req, res) => {
		const genre = genres[req.params.id]

		if (!genre) {
			return res
				.status(404)
				.json({ error: `${ENTITY_NAME} not found` })
		}

		res.json(genre)
	}
)

router.post('/', genreBodySchema, validate, (req, res) => {
	const id = generateUniqueId()

	const { name } = req.body
	const newGenre = { id, name }

	genres[id] = newGenre

	res.status(201).json(newGenre)
})

router.put(
	'/:id',
	idParamSchema(ENTITY_NAME),
	genreBodySchema,
	validate,
	(req, res) => {
		const { id } = req.params
		const updatedGenreData = req.body
		const genre = genres[id]

		if (!genre) {
			return res
				.status(404)
				.json({ error: `${ENTITY_NAME} not found` })
		}

		genres[id] = { ...genre, ...updatedGenreData }
		res.json(genres[id])
	}
)

router.delete(
	'/:id',
	idParamSchema(ENTITY_NAME),
	validate,
	(req, res) => {
		const { id } = req.params
		const genre = genres[id]

		if (!genre) {
			return res
				.status(404)
				.json({ error: `${ENTITY_NAME} not found` })
		}

		delete genres[id]

		res.status(200).send(genre)
	}
)

module.exports = router
