const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIBTComboItems = sequelize4.define('tbl_ibt_comboitems', {
    StockCode: {
        type: DataTypes.STRING(254),
        allowNull: false,
        defaultValue: '',
    },
    ItemDescription: {
        type: DataTypes.STRING(60),
        allowNull: true,
    },
    Quantity: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    UnitPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    ComboPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    QtyThresholds: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    RetailPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
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
    },
    StoreMainODBC: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    Status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
// }, {
//     tableName: 'tbl_ibt_comboitems',
//     timestamps: false,
//     primaryKey: ['StoreLocationName', 'StoreLocationODBC', 'StockCode'],
//     uniqueKeys: {
//         MyTableConstraint: {
//             fields: ['QtyThresholds', 'StockCode', 'Quantity'],
//         },
//     },
});

module.exports = TblIBTComboItems;
