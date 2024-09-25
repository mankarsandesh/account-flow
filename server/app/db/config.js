const Sequelize = require('sequelize')

const sequelize = new Sequelize(
	process.env.MYSQL_DATABASE,
	process.env.MYSQL_USER,
	process.env.MYSQL_PASSWORD,
	{
		host: process.env.MYSQL_HOST_IP,
		dialect: 'mysql',
		dialectOptions: {
			//useUTC: false,
			dateStrings: true,
			typeCast: function (field, next) {
				// for reading from database
				if (field.type === 'DATETIME') {
					return field.string()
				}
				return next()
			},
		},
		timezone: '+07:00',
	}
)

//Check if the database is connected successfully
sequelize
	.authenticate()
	.then(() => {
		console.log('Connection established successfully')
	})
	.catch((error) => {
		console.log(error)
	})

// //Create db table if it does not exist
sequelize.sync()

module.exports = sequelize
