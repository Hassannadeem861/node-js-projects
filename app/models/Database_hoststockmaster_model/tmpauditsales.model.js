const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpAuditSales = sequelize4.define('tmpauditsales', {
    SaleNum: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    TransactionNum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    StockCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    StockDescription: {
        type: DataTypes.STRING(40),
        allowNull: true,
        defaultValue: null,
    },
    Qty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    UnitPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    VAT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Linetotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    CashupNum: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    InCashUp: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    PosSale: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    hisYear: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null,
    },
    hisMonth: {
        type: DataTypes.STRING(2),
        allowNull: true,
        defaultValue: null,
    },
    hisday: {
        type: DataTypes.STRING(2),
        allowNull: true,
        defaultValue: null,
    },
    ClerkCashup: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: null,
    },
    ExclLineTotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    lastcost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    averagecost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    MajorNo: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Sub1No: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Sub2No: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Username: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    PickingSlip: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    SlipType: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
});

module.exports = TmpAuditSales;
 