const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIBTGRN = sequelize4.define('tbl_ibt_grn', {
    GRVNum: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    InvoiceNumber: {
        type: DataTypes.STRING(60),
        allowNull: true,
        defaultValue: null,
    },
    InvoiceName: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    SupplierCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    Shipping: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Handling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Other: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    SubTotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Discount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    VAT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    DateTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    HisDay: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: null,
    },
    HisMonth: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: null,
    },
    HisYear: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: null,
    },
});

module.exports = TblIBTGRN;
