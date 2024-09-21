const DataTypes = require('sequelize')
const db = require('../db/config')

const Sample = db.define(
    'sample',
    {
        id: {
            type: DataTypes.BIGINT(20).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        tableName: 'sample',
    }
)

module.exports = Sample
