// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbllivecashierturnover = sequelize2.define("tbllivecashierturnover", {
        Cashier: {
        type: Sequelize.STRING,
      },
      SaleType: {
        type: Sequelize.STRING,
      },
      Amount: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports = Tbllivecashierturnover;
  
  