const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIbtProductDetailsUpdate = sequelize4.define('tbl_ibt_product_details_update', {
    StockCode: {
        type: DataTypes.STRING(16),
        allowNull: false,
        defaultValue: '',
    },
    ProductType: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null,
    },
    LinkCode: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null,
    },
    LinkDescription: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    UnitsQty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    UnitDescription: {
        type: DataTypes.STRING(40),
        allowNull: true,
        defaultValue: null,
    },
    PackWeight: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    PackWeightDescription: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: null,
    },
    PriceCalculation: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null,
    },
    ScaleItem: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    FractionsAllowed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    NONGrossProfit: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    EnterNewDescription: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    SQItem: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    OverCounter: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    CombinedItem: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    VatFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    ProductDiscount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    DS860: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    SubTotalCharge: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    FixedPriceScaleItem: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    LabelItem: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    NonGPItem: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    SPTerms: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    SpecialFooter: {
        type: DataTypes.BOOLEAN,
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
//     primaryKey: {
//         type: DataTypes.STRING(16),
//         name: 'PRIMARY',
//     },
//     tableName: 'tbl_ibt_product_details_update',
//     timestamps: false,
});

module.exports = TblIbtProductDetailsUpdate;
