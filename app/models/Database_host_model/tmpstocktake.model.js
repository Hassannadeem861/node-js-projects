// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tmpstocktake = sequelize2.define("tmpstocktake", {
        StockCode: {
            type: Sequelize.STRING(19),
            allowNull: true
        },
        StockBarcode: {
            type: Sequelize.STRING(20),
            allowNull: true
        },
        Description: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        SOH: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        StockCount: {
            type: Sequelize.DOUBLE,
            allowNull: true
        }
          });
  
          module.exports = Tmpstocktake;
  
  