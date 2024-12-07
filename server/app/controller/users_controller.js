const bcrypt = require('bcrypt')
const {
	findUserData,
	findUser,
	storeUsers
} = require('../components/Users/users.interface')
const {
	successResponse,
	serverError,
	notFoundError,
	badRequestError
} = require('../utils/utils')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');


// Users Login
const AuthUsers = async (req, res) => {
	try {
		const usersData = {
			user_email: req.body.user_email,
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

// Store users Information
const usersStore = async (req, res) => {
	try {
		// Handle validation errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const salt = await bcrypt.genSalt(10)
		const usersData = {
			user_name: req.body.user_name,
			user_email: req.body.user_email,
			user_type : req.body.user_type,
			password: await bcrypt.hash(req.body.password, salt),
		}
		const count = await findUser(usersData)
		if (count) {
			return res.status(404).send(notFoundError('Email Id Already Exits'))
		} else {
			const users = await storeUsers(usersData)
			if (users.error) {
				return res.status(400).send(badRequestError(users.error))
			}
			return res.send(successResponse(users))
		}
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}



module.exports = {
	AuthUsers,
	usersStore
}
