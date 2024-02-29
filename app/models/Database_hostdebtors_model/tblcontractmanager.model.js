// models/tblcontractmanager.js

// const { Sequelize } = require('sequelize');
// const sequelize = require('../config/database'); // Adjust the path if needed

const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');



const TblContractManager = sequelize3.define('tblcontractmanager', {
    Datetime: {
        type: Sequelize.DATE,
      },
      
      ContractNo: {
        type: Sequelize.DOUBLE,
      },
      
      DebtorCode: {
        type: Sequelize.STRING(40),
      },
      
      DebtorName: {
        type: Sequelize.STRING(90),
      },
      
      StartDate: {
        type: Sequelize.DATE,
      },
      
      EndDate: {
        type: Sequelize.DATE,
      },
      
      ContractActive: {
        type: Sequelize.INTEGER(3),
      },
      
      GroupID: {
        type: Sequelize.STRING(20),
      },
      
      HisDay: {
        type: Sequelize.STRING(4),
      },
      
      HisMonth: {
        type: Sequelize.STRING(4),
      },
      
      HisYear: {
        type: Sequelize.STRING(10),
      },
      
      Blank1: {
        type: Sequelize.STRING(20),
      },
      
      Blank2: {
        type: Sequelize.STRING(20),
      },
      
      Blank3: {
        type: Sequelize.STRING(20),
      },
      
      UserName: {
        type: Sequelize.STRING,
      },
      
}, {
  // Other model configurations (timestamps, tableName, etc.)
});


module.exports= TblContractManager;