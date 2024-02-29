const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpAuditSales = sequelize2.define('tmpauditsales', {
    SaleNum: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
    },
    TransactionNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    StockCode: {
        type: Sequelize.STRING(50),
        defaultValue: null
    },
    StockDescription: {
        type: Sequelize.STRING(40),
        defaultValue: null
    },
    Qty: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    UnitPrice: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    VAT: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    Linetotal: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    CashupNum: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    InCashUp: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    PosSale: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    hisYear: {
        type: Sequelize.STRING(4),
        defaultValue: null
    },
    hisMonth: {
        type: Sequelize.STRING(2),
        defaultValue: null
    },
    hisday: {
        type: Sequelize.STRING(2),
        defaultValue: null
    },
    ClerkCashup: {
        type: Sequelize.STRING(50),
        defaultValue: null
    },
    ExclLineTotal: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    lastcost: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    averagecost: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    MajorNo: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    Sub1No: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    Sub2No: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    DiscountType: {
        type: Sequelize.STRING(100),
        defaultValue: null
    },
    DiscountQty: {
        type: Sequelize.STRING(50),
        defaultValue: null
    },
    CField1: {
        type: Sequelize.STRING(100),
        defaultValue: null
    },
    CField2: {
        type: Sequelize.STRING(100),
        defaultValue: null
    },
    CField3: {
        type: Sequelize.STRING(100),
        defaultValue: null
    },
    NField1: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    NField2: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    },
    NField3: {
        type: Sequelize.DOUBLE,
        defaultValue: null
    }
}, {
    // Additional configuration options can be added here
});

module.exports = TmpAuditSales;
