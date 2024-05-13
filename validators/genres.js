const { body } = require('express-validator')

const genreBodySchema = [
	body('name')
		.trim()
		.notEmpty()
		.withMessage('Genre name is required')
		.isLength({ min: 5 })
		.withMessage('Genre name must be at least 5 characters long'),
]

module.exports = { genreBodySchema }
