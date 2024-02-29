// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tmpugrv = sequelize2.define("tmpugrv", {
        StockCode: {
            type: Sequelize.STRING(19),
            allowNull: true
        },
        S_No: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        Description: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        RcvQty: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        CostPrice: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        SellingPrice: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        VATP: {
            type: Sequelize.DOUBLE,
            allowNull: true
        }
          });
  
          module.exports = Tmpugrv;
  
  