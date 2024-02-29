const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_stocktake = sequelize1.define("202309tbldata_stocktake", {
      datetime: {
        type: Sequelize.DATE,
      },
      Stockcode: {
        type: Sequelize.STRING,
      },
      Description: {
        type: Sequelize.STRING,
      },
      AdjustQuantityShelf: {
        type: Sequelize.DOUBLE,
      },
      OldShelfQuantity: {
        type: Sequelize.DOUBLE,
      },
      NewShelfQuantity: {
        type: Sequelize.DOUBLE,
      },
      AdjustQuantityFile: {
        type: Sequelize.DOUBLE,
      },
      OldFileQuantity: {
        type: Sequelize.DOUBLE,
      },
      NewFileQuantity: {
        type: Sequelize.DOUBLE,
      },
      CostPrice: {
        type: Sequelize.DOUBLE,
      },
      StockTakeNum: {
        type: Sequelize.INTEGER,
      },
      StockTakeType: {
        type: Sequelize.STRING,
      },
      User: {
        type: Sequelize.STRING,
      },
      Print: {
        type: Sequelize.INTEGER,
      },
      Hisyear: {
        type: Sequelize.STRING,
      },
      HisMonth: {
        type: Sequelize.STRING,
      },
      HisDay: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports =  Tbldata_stocktake;
  
  