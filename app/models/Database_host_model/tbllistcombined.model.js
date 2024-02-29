// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbllistcombined = sequelize2.define("tbllistcombined", {
        StockCode: {
            type: Sequelize.STRING(19),
            allowNull: true,
            
          },
          Description: {
            type: Sequelize.STRING(100),
            allowNull: true,
            
          },
          Combined: {
            type: Sequelize.STRING(10),
            allowNull: true
          }
    });
  
    module.exports = Tbllistcombined;

  