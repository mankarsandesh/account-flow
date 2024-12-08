const DataTypes = require('sequelize')
const db = require('../db/config')
const {NULL} = require("mysql/lib/protocol/constants/types");
const AccountFile = require('./account_file');

const Transaction = db.define(
    'transaction',
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
        account_id: {
            type: DataTypes.BIGINT(20).UNSIGNED,
            allowNull: false,
        },
        transaction_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        transaction_description: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        transaction_type: {
            type: DataTypes.ENUM('credit', 'debit'),
            allowNull: false,
        },
        amount: {
            type : DataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
        },
        balance: {
            type : DataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING(30),
            allowNull: true
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
        tableName: 'transaction'
    }
)

module.exports = Transaction
