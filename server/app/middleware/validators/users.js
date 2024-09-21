const { body } = require('express-validator')

const validateUsers = () => {
	return [
		body('userName', 'userName is required').exists(),
		body('userEmail', 'userEmail is required').exists(),
		body('password', 'password is required').exists(),
	]
}

const validateAuthUser = () => {
	return [
		body('userEmail', 'userEmail is required').exists(),
		body('password', 'password is required').exists(),
	]
}

module.exports = {
	validateUsers,
	validateAuthUser,
}
