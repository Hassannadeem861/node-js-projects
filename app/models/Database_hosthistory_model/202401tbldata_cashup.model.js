const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_cashup = sequelize1.define("202401tbldata_cashup", {
      // Additional fields from 202310tbldata_cashup table
      cashupnum: {
        type: Sequelize.DOUBLE,
      },
      datetime: {
        type: Sequelize.DATE,
      },
      username: {
        type: Sequelize.STRING,
      },
      CashUpDone: {
        type: Sequelize.BOOLEAN,
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
  
  