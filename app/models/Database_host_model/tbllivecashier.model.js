// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbllivecashier = sequelize2.define("tbllivecashier", {
        Cashier: {
        type: Sequelize.STRING,
      },
      CashierHour: {
        type: Sequelize.STRING,
      },
      SaleType: {
        type: Sequelize.STRING,
      },
      Amount: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports = Tbllivecashier;
  
  