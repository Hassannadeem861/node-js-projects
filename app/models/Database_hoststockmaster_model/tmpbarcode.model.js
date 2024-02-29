const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpBarcode = sequelize4.define('tmpbarcode', {
    StockCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    barcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    Description: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
});

module.exports = TmpBarcode;
