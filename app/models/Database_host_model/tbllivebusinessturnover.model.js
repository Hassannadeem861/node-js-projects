// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbllivebusinessturnover = sequelize2.define("tbllivebusinessturnover", {
        SaleType: {
        type: Sequelize.STRING,
      },
      Amount: {
        type: Sequelize.STRING,
      },
    
    });
  
    module.exports = Tbllivebusinessturnover;
  
  