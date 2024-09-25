const {
	findUserData,
	allUsers
} = require('../components/Users/users.interface')
const {
	successResponse,
	serverError,
	notFoundError,
} = require('../utils/utils')
const jwt = require('jsonwebtoken')
// Users Login
const AuthUsers = async (req, res) => {
	try {
		var usersData = {
			userEmail: req.body.userEmail,
			password: req.body.password,
		}
		const userData = await findUserData(usersData)
		if (!userData) {
			return res
				.status(401)
				.send(notFoundError('Your Email and Password is InCorrect'))
		} else if (!(usersData.password, userData.password)) {
			return res
				.status(401)
				.send(notFoundError('Your Email and Password is InCorrect'))
		} else {
			const token = jwt.sign(
				{ user: userData.userEmail },
				"sandesh_AAWT_key"
			)
			return res.send(
				successResponse({
					id: userData.userID,
					userName: userData.userName,
					userEmail: userData.userEmail,
					userType: userData.userType,
					access_token: token,
				})
			)
		}
	} catch (error) {
		res.status(500).send(serverError())
	}
}



module.exports = {
	AuthUsers
}
