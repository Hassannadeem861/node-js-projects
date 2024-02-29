// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_stocktake = sequelize1.define("202308tbldata_stocktake", {
     
        dateTime: {
            type: Sequelize.DATE,
            allowNull: true, // Since it allows NULL values
          },
          Stockcode: {
            type: Sequelize.STRING(25), // varchar(25)
            collate: 'latin1_swedish_ci',
            allowNull: true,
          },
          Description: {
            type: Sequelize.STRING(50), // varchar(50)
            collate: 'latin1_swedish_ci',
            allowNull: true,
          },
          AdjustQuantityShelf: {
            type: Sequelize.DOUBLE,
            allowNull: true,
          },
          OldShelfQuantity: {
            type: Sequelize.DOUBLE,
            allowNull: true,
          },
          NewShelfQuantity: {
            type: Sequelize.DOUBLE,
            allowNull: true,
          },
         
          CostPrice: {
            type: Sequelize.DOUBLE,
            allowNull: true,
          },
          StockTakeNum: {
            type: Sequelize.INTEGER(11), // int(11)
            allowNull: true,
          },
          StockTakeType: {
            type: Sequelize.STRING(50), // varchar(50)
            collate: 'latin1_swedish_ci',
            allowNull: true,
          },
          User: {
            type: Sequelize.STRING(50), // varchar(50)
            collate: 'latin1_swedish_ci',
            allowNull: true,
          },
          Print: {
            type: Sequelize.INTEGER(1), // int(1)
            allowNull: true,
          },
          Hisyear: {
            type: Sequelize.STRING(10), // varchar(10)
            collate: 'latin1_swedish_ci',
            allowNull: true,
          },
          HisMonth: {
            type: Sequelize.STRING(10), // varchar(10)
            collate: 'latin1_swedish_ci',
            allowNull: true,
          },
          HisDay: {
            type: Sequelize.STRING, // Data type not specified, assuming it's a string
            allowNull: true,
          },
        
    });
  
    module.exports =  Tbldata_stocktake;
  
