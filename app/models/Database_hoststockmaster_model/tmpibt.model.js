const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpIBT = sequelize4.define('tmpibt', {
    DateTime: {
        type: DataTypes.DATE,
        defaultValue: null,
    },
    Tran_No: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    StockCode: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    Description: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    Qty: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    Ucost: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    Uselling: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    TotalCost: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    TotalSelling: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    StoreIn: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    StoreOut: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    StoreInODBC: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    StoreOutODBC: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    Status: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    VATPerc: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    UInclCost: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    UExclSelling: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    TInclCost: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    TExclSelling: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
});

module.exports = TmpIBT;
