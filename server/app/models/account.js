const DataTypes = require('sequelize')
const db = require('../db/config')

const Account = db.define(
    'account',
    {
        id: {
            type: DataTypes.BIGINT(20).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.BIGINT(20).UNSIGNED,
            allowNull: false,
        },
        account_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        account_description: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        account_type: {
            type: DataTypes.INTEGER(4),
            allowNull: false,
        },
        color: {
            type : DataTypes.STRING(10),
            allowNull: true,
        },
        status: {
            type : DataTypes.STRING(10),
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
        tableName: 'account'
    }
)

module.exports = Account
