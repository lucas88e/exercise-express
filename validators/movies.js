const { body } = require('express-validator')

const movieBodySchema = [
	body('title').trim().notEmpty().withMessage('Title is required'),
	body('year')
		.isInt({ max: new Date().getFullYear() })
		.withMessage(
			'Year must be a valid integer between 1900 and current year'
		),
	body('genreId')
		.isUUID(4)
		.withMessage('Genre ID must be a valid UUID'),
	body('director')
		.trim()
		.notEmpty()
		.withMessage('Director is required'),
]

module.exports = { movieBodySchema }
