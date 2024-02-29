const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIbtStatus = sequelize4.define('tbl_ibt_status', {
    StockCreation: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    StockUpdate: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    IBTTransactions: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
});

module.exports = TblIbtStatus;
