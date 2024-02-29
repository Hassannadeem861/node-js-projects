const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIbtQtyPrices = sequelize4.define('tbl_ibt_qtyprices', {
    PricePos: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    StockCode: {
        type: DataTypes.STRING(254),
        allowNull: false,
        defaultValue: '',
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
//     uniqueKeys: {
//         MyTableConstraint: {
//             fields: ['PricePos', 'StockCode', 'Quantity']
//         }
//     }
});

module.exports = TblIbtQtyPrices;
