// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tmpstockrecord = sequelize2.define("tmpstockrecord", {
        StockCode: {
            type: Sequelize.STRING(16),
            allowNull: true
        },
        StockBarCode: {
            type: Sequelize.STRING(16),
            allowNull: true
        },
        Description1: {
            type: Sequelize.STRING(40),
            allowNull: true
        },
        MajorNo: {
            type: Sequelize.SMALLINT(6),
            allowNull: true
        },
        Sub1No: {
            type: Sequelize.SMALLINT(6),
            allowNull: true
        },
        Sub2No: {
            type: Sequelize.SMALLINT(6),
            allowNull: true
        },
        AvarageCostPrice: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        LastCostPrice: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        VatPercentage: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        DefaultSellingPrice: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        SOH: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        MajorDescription: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        Sub1Description: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        Sub2Description: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        TotalCost: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        TotalSelling: {
            type: Sequelize.DOUBLE,
            allowNull: true
        }
          });
  
          module.exports = Tmpstockrecord;
  
  