const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblavgsuppliersale = sequelize2.define("tblavgsuppliersale", {
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
      supplierCode: {
        type: Sequelize.STRING,
      },
      SupplierName: {
        type: Sequelize.STRING,
      }
    });
  
    module.exports =  Tblavgsuppliersale;
