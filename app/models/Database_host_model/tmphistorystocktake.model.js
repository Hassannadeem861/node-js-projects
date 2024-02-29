const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tmphistorystocktake = sequelize2.define("tmphistorystocktake", {
    StockCode: {
        type: Sequelize.STRING,
    },
    Description: {
        type: Sequelize.STRING,
    },
    SOH: {
        type: Sequelize.DOUBLE,
    },
    EnterQty: {
        type: Sequelize.DOUBLE,
    },
    Costprice: {
        type: Sequelize.DOUBLE,
    },
    SellingPrice: {
        type: Sequelize.DOUBLE,
    },
    QtyDiffrence: {
        type: Sequelize.DOUBLE,
    },
    HisDay: {
        type: Sequelize.STRING,
    },
    HisMonth: {
        type: Sequelize.STRING,
    },
    HisYear: {
        type: Sequelize.STRING,
    },
    StockTakeNo: {
        type: Sequelize.INTEGER,
    }
}, {
    primaryKey: ['StockCode']
});

module.exports = Tmphistorystocktake;
