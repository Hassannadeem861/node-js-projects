// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');

  const Tbldebtor_tran_cloud = sequelize3.define("tbldebtors_tran_cloud", {

    
      DateTime: {
        type: Sequelize.DATE,
        
      },
      DebtorCode: {
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
        allowNull: false,
        defaultValue: 0,
      },
      OrderNo: {
        type: Sequelize.STRING,
      },
      hisYear: {
        type: Sequelize.STRING,
      },
      hisMonth: {
        type: Sequelize.STRING,
      },
      hisDay: {
        type: Sequelize.STRING,
      },
      DayEndFinalize: {
        type: Sequelize.INTEGER,
      },
      AccountSystem: {
        type: Sequelize.STRING,
        
      },
      Vat: {
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
    },);
  
    module.exports= Tbldebtor_tran_cloud;
  