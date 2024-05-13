const { param } = require('express-validator')

const idParamSchema = (entity) =>
	param('id')
		.notEmpty()
		.withMessage(`${entity} ID is required`)
		.isUUID(4)
		.withMessage(`Invalid ${entity} ID format`)

module.exports = {
	idParamSchema,
}
