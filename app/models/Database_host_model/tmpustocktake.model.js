// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tmpustocktake = sequelize2.define("tmpustocktake", {
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
          SOH: {
            type: Sequelize.DOUBLE,
            allowNull: true
          },
          StockCount: {
            type: Sequelize.DOUBLE,
            allowNull: true
          }
          });
  
          module.exports = Tmpustocktake;
  
  