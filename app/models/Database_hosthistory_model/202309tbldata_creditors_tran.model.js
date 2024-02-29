// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_creditors_tran = sequelize1.define("202309tbldata_creditors_tran", {
      DateTime: {
        type: Sequelize.DATE,
       
      },
      Creditorcode: {
        type: Sequelize.STRING,
       
      },
      Reference: {
        type: Sequelize.STRING,
       
      },
      Description: {
        type: Sequelize.STRING,
       
      },
      TransType: {
        type: Sequelize.STRING,
       
      },
      Amount: {
        type: Sequelize.DOUBLE,
       
      },
      Hisyear: {
        type: Sequelize.STRING,
       
      },
      HisMonth: {
        type: Sequelize.STRING,
       
      },
      Hisday: {
        type: Sequelize.STRING,
       
      },
      VAT: {
        type: Sequelize.DOUBLE,
       
      },
      UserName: {
        type: Sequelize.STRING,
       
      },
      CreditorName: {
        type: Sequelize.STRING,
       
      },
    });
  
    module.exports =  Tbldata_creditors_tran;
  
  