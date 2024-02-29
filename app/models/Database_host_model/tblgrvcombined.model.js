// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const tblgrvcombined = sequelize2.define("tblgrvcombined", {
        StockCode: {
            type: Sequelize.STRING(25),
            allowNull: false,
           
          },
          Description: {
            type: Sequelize.STRING(50),
            allowNull: false
          },
          CostPrice: {
            type: Sequelize.DOUBLE,
            allowNull: false
          },
          Qty: {
            type: Sequelize.DOUBLE,
            allowNull: false
          },
          ItemTotal: {
            type: Sequelize.DOUBLE,
            allowNull: true // Depending on whether you want to calculate and store it or not
          }
    });
  
    module.exports = tblgrvcombined; // 'tblgrvcombined' instead of 'Tblgrvcombined'

