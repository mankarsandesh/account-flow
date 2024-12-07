const DataTypes = require('sequelize')
const db = require('../db/config')

const Users = db.define(
	'users',
	{
		user_id: {
			type: DataTypes.BIGINT(20).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		user_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		user_email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true,
		},
		user_type: {
			type: DataTypes.ENUM('user', 'agent', 'owner', 'admin'),
			defaultValue: 'user',
		},
		email_active: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			defaultValue: 0,
		},
		status: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			defaultValue: 1,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()'),
			field: 'created_at',
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()'),
			field: 'updated_at',
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true,
		},
	},
	{
		freezeTableName: true,
		tableName: 'users',
		// Password can not return
		defaultScope: {
			attributes: {
				exclude: ['password', 'createdAt'],
			},
			order: [['userID', 'DESC']],
		},
		// Scope Define then return password
		scopes: {
			withPassword: {
				attributes: {
					include: ['password'],
				},
			},
		},
	}
)

module.exports = Users
