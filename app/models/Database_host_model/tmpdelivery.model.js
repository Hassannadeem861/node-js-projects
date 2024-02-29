const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tmpdelivery = sequelize2.define("tmpdelivery", {
    InvoiceNo: {
        type: Sequelize.DOUBLE,
    },
    DelNo: {
        type: Sequelize.DOUBLE,
    },
    LineNo: {
        type: Sequelize.DOUBLE,
    },
    StockCode: {
        type: Sequelize.STRING,
    },
    Description: {
        type: Sequelize.STRING,
    },
    SoldQty: {
        type: Sequelize.DOUBLE,
    },
    DeliveredQty: {
        type: Sequelize.DOUBLE,
    },
    DispatchQty: {
        type: Sequelize.DOUBLE,
    },
    BalanceQty: {
        type: Sequelize.DOUBLE,
    }
}, {
    primaryKey: 'LineNo'
});

module.exports = Tmpdelivery;
