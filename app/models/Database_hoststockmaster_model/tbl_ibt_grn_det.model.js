const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const Tbl_ibt_grn_det = sequelize4.define('tbl_ibt_grn_det', {
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
        // primaryKey: true,
    },
    StockCode: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    CreditorItemCode: {
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
    BonusQuantity: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    QuantityOrdered: {
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
    Discount1: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Discount2: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    DiscountCurrency: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    LineTotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    GRVNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
    Subtotal: {
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
    ShipSuppl: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    Comment: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
// }, {
//     indexes: [
//         {
//             unique: true,
//             fields: ['TransactionNumber', 'GRVNum'],
//             name: 'idx_TransactionNumber_GRVNum',
//         },
//         {
//             name: 'idx_GRVNum',
//             fields: ['GRVNum'],
//         },
//         {
//             name: 'idx_ProductCode',
//             fields: ['StockCode'],
//         },
//         {
//             name: 'idx_SupplierCode',
//             fields: ['SupplierCode'],
//         },
//         {
//             name: 'idx_tblStockRecordtblAuditGRV',
//             fields: ['StockCode'],
//         },
//     ],
});

module.exports = Tbl_ibt_grn_det;
