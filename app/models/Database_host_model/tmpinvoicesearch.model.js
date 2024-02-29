const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tmpinvoicesearch = sequelize2.define("tmpinvoicesearch", {
    SaleNum: {
        type: Sequelize.DOUBLE,
    },
    TransactionNum: {
        type: Sequelize.INTEGER,
    },
    StockCode: {
        type: Sequelize.STRING,
    },
    StockDescription: {
        type: Sequelize.STRING,
    },
    Qty: {
        type: Sequelize.DOUBLE,
    },
    UnitPrice: {
        type: Sequelize.DOUBLE,
    },
    VAT: {
        type: Sequelize.DOUBLE,
    },
    Linetotal: {
        type: Sequelize.DOUBLE,
    },
    CashupNum: {
        type: Sequelize.DOUBLE,
    },
    InCashUp: {
        type: Sequelize.DOUBLE,
    },
    PosSale: {
        type: Sequelize.DOUBLE,
    },
    hisYear: {
        type: Sequelize.STRING,
    },
    hisMonth: {
        type: Sequelize.STRING,
    },
    hisday: {
        type: Sequelize.STRING,
    },
    ClerkCashup: {
        type: Sequelize.STRING,
    },
    ExclLineTotal: {
        type: Sequelize.DOUBLE,
    },
    lastcost: {
        type: Sequelize.DOUBLE,
    },
    averagecost: {
        type: Sequelize.DOUBLE,
    },
    MajorNo: {
        type: Sequelize.DOUBLE,
    },
    Sub1No: {
        type: Sequelize.DOUBLE,
    },
    Sub2No: {
        type: Sequelize.DOUBLE,
    }
}, {
    indexes: [
        {
            fields: ['CashupNum']
        },
        {
            fields: ['SaleNum']
        },
        {
            fields: ['StockCode']
        },
        {
            fields: ['TransactionNum']
        }
    ]
});

module.exports = Tmpinvoicesearch;
