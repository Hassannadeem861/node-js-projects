const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
  const Tbldata_adjustment = sequelize1.define("202307tbldata_adjustment", {
      DateTime: {
          type: Sequelize.DATE,
          allowNull: false
      },
      StockCode: {
          type: Sequelize.STRING(20),
          allowNull: true
      },
      Description: {
          type: Sequelize.STRING(50),
          allowNull: true
      },
      AdjustQuantity: {
          type: Sequelize.DOUBLE,
          allowNull: true
      },
      OldQuantity: {
          type: Sequelize.DOUBLE,
          allowNull: true
      },
      NewQuantity: {
          type: Sequelize.DOUBLE,
          allowNull: true
      },
      CostPrice: {
          type: Sequelize.DOUBLE,
          allowNull: true
      },
      Reason: {
          type: Sequelize.STRING(50),
          allowNull: true
      },
      User: {
          type: Sequelize.STRING(30),
          allowNull: true
      },
      Print: {
          type: Sequelize.BOOLEAN,
          allowNull: true
      },
      Hisyear: {
          type: Sequelize.STRING(10),
          allowNull: true
      },
      HisMonth: {
          type: Sequelize.STRING(10),
          allowNull: true
      },
      Hisday: {
          type: Sequelize.STRING(10),
          allowNull: true
      }
  });

  module.exports =  Tbldata_adjustment;

