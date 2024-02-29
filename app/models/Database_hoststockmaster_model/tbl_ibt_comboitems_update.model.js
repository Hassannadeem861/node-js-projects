const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIBTComboItemsUpdate = sequelize4.define('tbl_ibt_comboitems_update', {
    StockCode: {
        type: DataTypes.STRING(254),
        allowNull: true,
        defaultValue: null,
    },
    ItemDescription: {
        type: DataTypes.STRING(60),
        allowNull: true,
        defaultValue: null,
    },
    Quantity: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    UnitPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    ComboPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    QtyThresholds: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    RetailPrice: {
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
//     tableName: 'tbl_ibt_comboitems_update',
//     timestamps: false,
//     primaryKey: ['StoreLocationName', 'StoreLocationODBC'],
//     uniqueKeys: {
//         MyTableConstraint: {
//             fields: ['QtyThresholds', 'StockCode', 'Quantity'],
//         },
//     },
});

module.exports = TblIBTComboItemsUpdate;
