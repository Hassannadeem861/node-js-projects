// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tmpstockonhand = sequelize2.define("tmpstockonhand", {
        StockCode: {
            type: Sequelize.STRING(16),
            defaultValue: '',
            allowNull: false
        },
        StockBarCode: {
            type: Sequelize.STRING(16),
            allowNull: true
        },
        Description1: {
            type: Sequelize.STRING(40),
            allowNull: true
        },
        Description2: {
            type: Sequelize.STRING(40),
            allowNull: true
        },
        ItemComment: {
            type: Sequelize.STRING(50),
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
        StockonHand: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        DiscQty: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        MinStock: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        Maxstock: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        StockOnOrder: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        MaximumDiscount: {
            type: Sequelize.DOUBLE,
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
        LaybyeStock: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        AskPC: {
            type: Sequelize.INTEGER(11),
            allowNull: true
        },
        AskDC: {
            type: Sequelize.STRING(10),
            allowNull: true
        },
        Picture: {
            type: Sequelize.BLOB('long'),
            allowNull: true
        },
        SerialItem: {
            type: Sequelize.STRING(5),
            allowNull: true
        },
        NettCost: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        MajorName: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Sub1Name: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Sub2Name: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        TCost: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        TSelling: {
            type: Sequelize.DOUBLE,
            allowNull: true
        }
          });
  
          module.exports = Tmpstockonhand;
  
  