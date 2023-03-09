const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config')

const Role = db.define("roles", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
})