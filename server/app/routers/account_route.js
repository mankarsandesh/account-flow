const express = require('express')
const accountTypeRouter = express.Router()
const accountController = require('../seeders/account-type')


accountTypeRouter.post('/account-type', accountController.accountTypeStore)



module.exports = accountTypeRouter