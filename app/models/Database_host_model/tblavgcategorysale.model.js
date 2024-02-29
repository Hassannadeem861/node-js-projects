const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblavgcategorysale = sequelize2.define("tblavgcategorysale", {
      StockCode: {
        type: Sequelize.STRING,
      },
      StockDescription: {
        type: Sequelize.STRING,
      },
      Week1: {
        type: Sequelize.DOUBLE,
      },
      Week2: {
        type: Sequelize.DOUBLE,
      },
      Week3: {
        type: Sequelize.STRING,
      },
      Week4: {
        type: Sequelize.DOUBLE,
      },
      Week5: {
        type: Sequelize.DOUBLE,
      },
      Week6: {
        type: Sequelize.DOUBLE,
      },
      Cost: {
        type: Sequelize.DOUBLE,
      },
      Selling: {
        type: Sequelize.DOUBLE,
      },
      SOH: {
        type: Sequelize.DOUBLE,
      },
      MinStock: {
        type: Sequelize.DOUBLE,
      },
      MaxStock: {
        type: Sequelize.DOUBLE,
      },
      MajorNo: {
        type: Sequelize.DOUBLE,
      },
      MajorDescription: {
        type: Sequelize.STRING,
      },
      Sub1No: {
        type: Sequelize.DOUBLE,
      },
      Sub1Description: {
        type: Sequelize.STRING,
      },
      Sub3No: {
        type: Sequelize.DOUBLE,
      },
      Sub3Description: {
        type: Sequelize.STRING,
      }
    });
  
    module.exports = Tblavgcategorysale;
