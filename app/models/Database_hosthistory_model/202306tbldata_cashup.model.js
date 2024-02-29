// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_cashup = sequelize1.define("202306tbldata_cashup", {
        cashupnum: {
        type: Sequelize.STRING,
      },
      DateTime: {
        type: Sequelize.DATE,
      },
      username: {
        type: Sequelize.STRING,
      },
      CashUpDone: {
        type: Sequelize.STRING,
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
     


    });
  
    module.exports =  Tbldata_cashup;
  
  