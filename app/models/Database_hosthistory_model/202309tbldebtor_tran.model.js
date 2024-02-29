const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldebtor_tran = sequelize1.define("202309tbldebtor_tran", {
      DateTime: {
        type: Sequelize.DATE,
      },
      Debtorcode: {
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
      OrderNo: {
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
      DayEndFinalize: {
        type: Sequelize.INTEGER,
      },
      AccountSystem: {
        type: Sequelize.STRING,
      },
      VAT: {
        type: Sequelize.DOUBLE,
      },
      BFDate: {
        type: Sequelize.DATE,
      },
      UserName: {
        type: Sequelize.STRING,
      },
      DebtorName: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Tbldebtor_tran;
  
  