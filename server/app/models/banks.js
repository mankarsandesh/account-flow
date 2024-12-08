const DataTypes = require('sequelize')
const db = require('../db/config')
const Users = require('./users')

const Banks = db.define(
    'banks',
    {
        id: {
            type: DataTypes.BIGINT(20).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        bank_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        account_type: {
            type: DataTypes.INTEGER(2),
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
            allowNull: true,
            timestamps: false,
            field: 'updated_at',
        },
    },
    {
        freezeTableName: true,
        tableName: 'banks'
    }
)

Users.hasMany(Banks)

module.exports = Banks
