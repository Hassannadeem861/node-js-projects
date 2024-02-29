const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIbtProductsUpdate = sequelize4.define('tbl_ibt_products_update', {
    StockCode: {
        type: DataTypes.STRING(16),
        allowNull: false,
        defaultValue: '',
    },
    StockBarCode: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    Description1: {
        type: DataTypes.STRING(40),
        allowNull: true,
        defaultValue: null,
    },
    Description2: {
        type: DataTypes.STRING(40),
        allowNull: true,
        defaultValue: null,
    },
    ItemComment: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    MajorNo: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: null,
    },
    Sub1No: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: null,
    },
    Sub2No: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: null,
    },
    StockonHand: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    DiscQty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    MinStock: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Maxstock: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    StockOnOrder: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    MaximumDiscount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    AvarageCostPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    LastCostPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    VatPercentage: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    DefaultSellingPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    LaybyeStock: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    AskPC: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    AskDC: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: null,
    },
    Picture: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
        defaultValue: null,
    },
    SerialItem: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: null,
    },
    NettCost: {
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

module.exports = TblIbtProductsUpdate;
