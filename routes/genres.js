const express = require('express')

const router = express.Router()
const { generateUniqueId } = require('../utils')
const { genres } = require('../data')

router.get('/', (req, res) => {
	res.json(Object.values(genres))
})

router.get('/:id', (req, res) => {
	const { id } = req.params
	const genre = genres[id]

	if (!genre) {
		return res.status(404).json({ error: 'Genre not found' })
	}

	res.json(genre)
})

router.post('/', (req, res) => {
	const newGenreId = generateUniqueId()
	const { name } = req.body
	const newGenre = { id: newGenreId, name }
	genres[newGenreId] = newGenre
	res.status(201).json(newGenre)
})

router.put(
	'/:id',
	param('id')
		.notEmpty()
		.withMessage('Genre ID is required')
		.isUUID(4)
		.withMessage('Invalid Genre ID format'),
	body('name')
		.notEmpty()
		.withMessage('Genre name is required')
		.isLength({ min: 5 })
		.withMessage('Genre name must be at least 5 characters long'),
	(req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		const { id } = req.params
		const updatedGenreData = req.body
		const genre = genres[id]

		if (!genre) {
			return res.status(404).json({ error: 'Genre not found' })
		}

		genres[id] = { ...genre, ...updatedGenreData }
		res.json(genres[id])
	}
)

router.delete('/:id', (req, res) => {
	const { id } = req.params
	const genre = genres[id]

	if (!genre) {
		return res.status(404).json({ error: 'Genre not found' })
	}

	delete genres[id]
	res.status(200).send(genre)
})

module.exports = router
