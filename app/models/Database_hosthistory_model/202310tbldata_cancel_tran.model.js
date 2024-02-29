// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_cancel_tran = sequelize1.define("202310tbldata_cancel_tran", {
        datetime: {
        type: Sequelize.STRING,
      },
      Stockcode: {
        type: Sequelize.STRING,
      },
      Description: {
        type: Sequelize.STRING,
      },
      UsrPwd: {
        type: Sequelize.STRING,
      },
      Usr: {
        type: Sequelize.STRING,
      },
      OverridePwd: {
        type: Sequelize.STRING,
      },
      OverrideUsr: {
        type: Sequelize.STRING,
      },
      Computer: {
        type: Sequelize.STRING,
      },
      MajorNum: {
        type: Sequelize.STRING,
      },
      Sub1Num: {
        type: Sequelize.STRING,
      },
      Sub2Num: {
        type: Sequelize.STRING,
      },
      Qty: {
        type: Sequelize.STRING,
      },
      ExclCostPrice: {
        type: Sequelize.STRING,
      },

      InclSellingPrice: {
        type: Sequelize.STRING,
      },

      vatPercentage: {
        type: Sequelize.STRING,
      },

      tableNum: {
        type: Sequelize.STRING,
      },

      Hisday: {
        type: Sequelize.STRING,
      },
      HisMonth: {
        type: Sequelize.STRING,
      },
      Hisyear: {
        type: Sequelize.STRING,
      },
     


    });
  
    module.exports =  Tbldata_cancel_tran;
  
  