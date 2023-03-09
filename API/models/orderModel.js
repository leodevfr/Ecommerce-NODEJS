const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config:');


const Order = db.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true ,
        autoIncrement: true
      },
      reference: {
        type: DataTypes.STRING(50)
      },
      totalPrice: {
        type: DataTypes.FLOAT
      },
      totalWeight: {
        type: DataTypes.FLOAT
      },
      userName: {
        type: DataTypes.STRING(50)
      },
      userAddress: {
        type: DataTypes.STRING(50)
      },
      carrier: {
        type: DataTypes.STRING(50)
      },
      carrierPrice: {
        type: DataTypes.FLOAT
      },

})

module.exports = Order