const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpMainPCStockTake = sequelize4.define('tmpmainpcstocktake', {
    stocklistname: {
        type: DataTypes.STRING(60),
        defaultValue: null,
    },
    stockcode: {
        type: DataTypes.STRING(16),
        defaultValue: null,
    },
    stockbarcode: {
        type: DataTypes.STRING(20),
        defaultValue: null,
    },
    description: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    stockcount: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
// }, {
//     // Additional table configurations can be added here
});

module.exports = TmpMainPCStockTake;
