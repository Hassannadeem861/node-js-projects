// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldebtor_tran = sequelize1.define("202306tbldebtor_tran", {
        DateTime: {
            type: Sequelize.DATE,
            allowNull: false
          },
          Debtorcode: {
            type: Sequelize.STRING(20),
            allowNull: true
          },
          Reference: {
            type: Sequelize.STRING(20),
            allowNull: true
          },
          Description: {
            type: Sequelize.STRING(100),
            allowNull: true
          },
          TransType: {
            type: Sequelize.STRING(3),
            allowNull: true
          },
          Amount: {
            type: Sequelize.DOUBLE,
            allowNull: true
          },
          OrderNo: {
            type: Sequelize.STRING(20),
            allowNull: true
          },
          Hisyear: {
            type: Sequelize.STRING(5),
            allowNull: true
          },
          HisMonth: {
            type: Sequelize.STRING(5),
            allowNull: true
          },
          Hisday: {
            type: Sequelize.STRING(5),
            allowNull: true
          },
          DayEndFinalize: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          AccountSystem: {
            type: Sequelize.STRING(20),
            allowNull: true
          },
          VAT: {
            type: Sequelize.DOUBLE,
            allowNull: true
          },
          BFDate: {
            type: Sequelize.DATE,
            allowNull: true
          },
          UserName: {
            type: Sequelize.STRING(30),
            allowNull: true
          },
          DebtorName: {
            type: Sequelize.STRING(255),
            allowNull: true
          }
   
    });
  
    module.exports =  Tbldebtor_tran;
  
  