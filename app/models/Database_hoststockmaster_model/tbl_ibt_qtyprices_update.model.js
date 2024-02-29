const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIbtQtyPricesUpdate = sequelize4.define('tbl_ibt_qtyprices_update', {
    PricePos: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    StockCode: {
        type: DataTypes.STRING(254),
        allowNull: true,
        defaultValue: null,
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    Price: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    StoreLocationName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
    },
    StoreLocationODBC: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
    },
    StoreMainName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    StoreMainODBC: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    Status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
// }, {
//     primaryKey: true,
});

module.exports = TblIbtQtyPricesUpdate;
