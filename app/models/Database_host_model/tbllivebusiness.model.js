// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbllivebusiness = sequelize2.define("tbllivebusiness", {
        BusinessHour: {
            type: Sequelize.STRING(20),
           
            allowNull: true,
           
          },
          SaleType: {
            type: Sequelize.STRING(20),
          
            allowNull: true,
            
          },
          Amount: {
            type: Sequelize.DOUBLE,
            allowNull: true,
            
          },
          TurnOverDay: {
            type: Sequelize.STRING(20),
           
            allowNull: true,
           
          },
    });
  
    module.exports = Tbllivebusiness;
  
  