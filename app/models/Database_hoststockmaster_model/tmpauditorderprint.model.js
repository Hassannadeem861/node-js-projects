const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpAuditOrderPrint = sequelize4.define('tmpauditorderprint', {
    DateTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    InvoiceNumber: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    TransactionNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    StockCode: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    Description: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    QuantityReceived: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    SOH: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    ExclusiveUnitCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    InclusiveUnitCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Markup: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    ExclusiveSelling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    InclusiveSelling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    VATPercentage: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    LineTotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    OrderNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    Subtotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    VAT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    SupplierCode: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    User: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null,
    },
    hisYear: {
        type: DataTypes.STRING(4),
        allowNull: true,
        defaultValue: null,
    },
    hisMonth: {
        type: DataTypes.STRING(2),
        allowNull: true,
        defaultValue: null,
    },
    hisDay: {
        type: DataTypes.STRING(2),
        allowNull: true,
        defaultValue: null,
    },
});

module.exports = TmpAuditOrderPrint;
