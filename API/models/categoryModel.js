const { Sequelize, DataTypes } = require('sequelize');
const db = require ('../../config');


const Category = db.define('category', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

Category.sync()

module.exports = Category