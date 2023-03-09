const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config')


const OrderDetail = db.define("orderDetail", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productName: {
        type: DataTypes.STRING
    },
    reference: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    total: {
        type: DataTypes.FLOAT
    }

})


module.exports = OrderDetail