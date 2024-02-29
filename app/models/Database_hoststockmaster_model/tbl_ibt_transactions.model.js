const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIbtTransactions = sequelize4.define('tbl_ibt_transactions', {
    DateTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    Tran_No: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
    },
    StockCode: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
    },
    Description: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    Qty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Ucost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Uselling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    TotalCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    TotalSelling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    StoreIn: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    StoreOut: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    StoreInODBC: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    StoreOutODBC: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    Status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    VATPerc: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    UInclCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    UExclSelling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    TInclCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    TExclSelling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
// }, {
});

module.exports = TblIbtTransactions;
