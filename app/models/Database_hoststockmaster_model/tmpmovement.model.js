const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpMovement = sequelize4.define('tmpmovement', {
    SoldDate: {
        type: DataTypes.DATE,
        allowNull: false,
        // defaultValue: '0000-00-00 00:00:00',
    },
    StockCode: {
        type: DataTypes.STRING(16),
        allowNull: false,
        defaultValue: '',
    },
    Description: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    MajorNum: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    Sub1Num: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    Sub2Num: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    Open_QTY: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    Close_QTY: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    Sold_QTY: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    Received_QTY: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    Adjust_QTY: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    Stock_Take_Diff: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    Sold_Excl_Selling: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    Sold_Excl_Cost: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    Received_Excl_Selling: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    Received_Excl_Cost: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    Used_In_Combined_Item: {
        type: DataTypes.STRING(62),
        defaultValue: null,
        charset: 'utf8',
    },
    HisDay: {
        type: DataTypes.STRING(10),
        defaultValue: null,
    },
    HisMonth: {
        type: DataTypes.STRING(10),
        defaultValue: null,
    },
    HisYear: {
        type: DataTypes.STRING(10),
        defaultValue: null,
    },
// }, {
//     // Define primary key
//     primaryKey: ['SoldDate', 'StockCode'],
//     // Additional table configurations can be added here
});

module.exports = TmpMovement;
