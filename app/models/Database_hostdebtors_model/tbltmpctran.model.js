// tutorial.model.js

const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');
  const Tbltmpctran = sequelize3.define("tbltmpctrans", {
      Date: {
          type: Sequelize.DATE,
          allowNull: false // Assuming Date should not be null
      },
      DebtorCode: {
          type: Sequelize.STRING
      },
      Reference: {
          type: Sequelize.STRING
      },
      OrderNo: {
          type: Sequelize.STRING
      },
      Description: {
          type: Sequelize.STRING
      },
      DebitAmount: {
          type: Sequelize.DECIMAL(10, 2) // Assuming DebitAmount is decimal with precision 10, scale 2
      },
      CreditAmount: {
          type: Sequelize.DECIMAL(10, 2) // Assuming CreditAmount is decimal with precision 10, scale 2
      },
      BalanceAmount: {
          type: Sequelize.DECIMAL(10, 2) // Assuming BalanceAmount is decimal with precision 10, scale 2
      },
      TransType: {
          type: Sequelize.STRING
      },
  });

  module.exports= Tbltmpctran;
