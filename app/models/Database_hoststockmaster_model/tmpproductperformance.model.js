const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpProdPerf = sequelize4.define('tmpproductperformance', {
    StockCode: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
    },
    StockDescription: {
        type: DataTypes.STRING(75),
        defaultValue: null,
    },
    MajorNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    Sub1No: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    Sub2No: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    Quantity: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    'Total Cost Price': {
        type: DataTypes.DECIMAL(14, 3),
        defaultValue: null,
    },
    'Avg Excl Selling': {
        type: DataTypes.DECIMAL(14, 2),
        defaultValue: null,
    },
    'Total Excl Selling': {
        type: DataTypes.DECIMAL(14, 2),
        defaultValue: null,
    },
    'Total Incl Selling': {
        type: DataTypes.DECIMAL(14, 2),
        defaultValue: null,
    },
    'GP %': {
        type: DataTypes.DECIMAL(14, 2),
        defaultValue: null,
    },
    'GP Value': {
        type: DataTypes.DECIMAL(14, 2),
        defaultValue: null,
    },
    VAT: {
        type: DataTypes.DECIMAL(14, 2),
        defaultValue: null,
    },
    GMajorGP: {
        type: DataTypes.DECIMAL(14, 3),
        allowNull: false,
        defaultValue: '0.000',
    },
    GSub1GP: {
        type: DataTypes.DECIMAL(14, 3),
        allowNull: false,
        defaultValue: '0.000',
    },
    GSub2GP: {
        type: DataTypes.DECIMAL(14, 3),
        allowNull: false,
        defaultValue: '0.000',
    },
    GGP: {
        type: DataTypes.DECIMAL(14, 3),
        allowNull: false,
        defaultValue: '0.000',
    },
    // }, {
    //     // Additional table configurations can be added here
});

module.exports = TmpProdPerf;
