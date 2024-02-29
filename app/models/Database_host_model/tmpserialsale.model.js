// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tmpserialsale = sequelize2.define("tmpserialsale", {
        SaleNum: {
            type: Sequelize.DOUBLE,
            allowNull: true
          },
          TranNo: {
            type: Sequelize.DOUBLE,
            allowNull: true
          },
          StockCode: {
            type: Sequelize.STRING(50),
            allowNull: true
          },
          ItemDescription: {
            type: Sequelize.STRING(60),
            allowNull: true
          },
          SerialNo: {
            type: Sequelize.STRING(256),
            allowNull: true
          }   });
  
          module.exports = Tmpserialsale;
  
  