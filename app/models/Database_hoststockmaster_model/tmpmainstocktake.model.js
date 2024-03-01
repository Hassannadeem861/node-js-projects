const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpMainStockTake = sequelize4.define('tmpmainstocktake', {
    stocklistname: {
        type: DataTypes.STRING(60),
        allowNull: false,
        defaultValue: '',
    },
    stockcode: {
        type: DataTypes.STRING(16),
        allowNull: false,
        defaultValue: '',
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
//     // Define primary key
//     primaryKey: ['stocklistname', 'stockcode'],
//     // Additional table configurations can be added here
});

module.exports = TmpMainStockTake;
