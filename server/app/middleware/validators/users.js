const { body } = require('express-validator')

const validateUsers =  [
		body('user_name', 'user_name is required').exists(),
		body('user_email', 'user_email is required').exists(),
		body('user_type', 'user_type is required').exists(),
		body('password', 'password is required').exists(),
]

const validateAuthUser = () => {
	return [
		body('user_email', 'userEmail is required').exists(),
		body('password', 'password is required').exists(),
	]
}

module.exports = {
	validateUsers,
	validateAuthUser,
}
