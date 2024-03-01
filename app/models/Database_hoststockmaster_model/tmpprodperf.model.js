const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpProdPerf = sequelize4.define('tmpprodperf', {
    StockCode: {
        type: DataTypes.STRING(254),
        defaultValue: null,
    },
    Description: {
        type: DataTypes.STRING(254),
        defaultValue: null,
    },
    MajorNo: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    MajorDesc: {
        type: DataTypes.STRING(254),
        defaultValue: null,
    },
    Sub1No: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    Sub1Desc: {
        type: DataTypes.STRING(254),
        defaultValue: null,
    },
    Sub2No: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    Sub2Desc: {
        type: DataTypes.STRING(254),
        defaultValue: null,
    },
    Quantity: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    QuantityOnHand: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    'Total Excl Cost': {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    'Total Excl Selling': {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    'Total Incl Selling': {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    'GP %': {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    'GP Value': {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    GMajorGP: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    GSub1GP: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    GSub2GP: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    GGP: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    GMajorTurnP: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
// }, {
//     // Additional table configurations can be added here
});

module.exports = TmpProdPerf;
