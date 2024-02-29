// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');
    const Tblcontractmanagerdet = sequelize3.define("tblcontractmanagerdet", {
      ContractNo: {
        type: Sequelize.STRING,
      },
      DebtorCode: {
        type: Sequelize.STRING,
      },
      StockCode: {
        type: Sequelize.STRING,
      },
      StockDescription: {
        type: Sequelize.STRING,
      },
      CostPrice: {
        type: Sequelize.STRING,
      },
      NormalPrice: {
        type: Sequelize.STRING,
      },
      ContractPrice: {
        type: Sequelize.STRING,
      },
      Qty: {
        type: Sequelize.STRING,
      },
      Blank1: {
        type: Sequelize.STRING,
      },
      Blank2: {
        type: Sequelize.STRING,
      },
      UserName: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports= Tblcontractmanagerdet;

  