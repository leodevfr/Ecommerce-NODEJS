const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config');
const Category = require('./categoryModel');

const Product = db.define("product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT  
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    isBest: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    imageUrl: {
        type: DataTypes.STRING
    },
    weight: {
        type: DataTypes.FLOAT
    }
})

Category.hasMany(Product)
Product.belongsTo(Category)

Product.sync()
module.exports = Product