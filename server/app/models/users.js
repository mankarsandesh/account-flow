const DataTypes = require('sequelize')
const db = require('../db/config')
const Banks = require('./banks')

const Users = db.define(
	'users',
	{
		id: {
			type: DataTypes.BIGINT(20).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		full_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true,
		},
		email_active: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			defaultValue: 0,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'active',
		},
		user_type: {
			type: DataTypes.ENUM('superadmin', 'charter', 'user'),
			defaultValue: 'charter',
		},
		created_by: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			defaultValue: 0,
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
			order: [['id', 'DESC']],
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

Banks.belongsTo(Users)


module.exports = Users
