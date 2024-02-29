const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpAuditGrvPrint = sequelize2.define('tmpauditgrvprint', {
    DateTime: {
        type: Sequelize.DATE,
        defaultValue: null,
    },
    InvoiceNumber: {
        type: Sequelize.STRING(16),
        defaultValue: null,
    },
    TransactionNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    StockCode: {
        type: Sequelize.STRING(16),
        defaultValue: null,
    },
    Description: {
        type: Sequelize.STRING(50),
        defaultValue: null,
    },
    QuantityReceived: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    ExclusiveUnitCost: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    InclusiveUnitCost: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    Disc1: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    Disc2: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    Markup: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    ExclusiveSelling: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    InclusiveSelling: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    VATPercentage: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    LineTotal: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    GRVNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    Subtotal: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    VAT: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    SupplierCode: {
        type: Sequelize.STRING(16),
        defaultValue: null,
    },
    User: {
        type: Sequelize.STRING(20),
        defaultValue: null,
    },
    hisYear: {
        type: Sequelize.STRING(4),
        defaultValue: null,
    },
    hisMonth: {
        type: Sequelize.STRING(2),
        defaultValue: null,
    },
    hisDay: {
        type: Sequelize.STRING(2),
        defaultValue: null,
    },
// }, {
//     indexes: [
//         { unique: true, fields: ['GRVNum', 'TransactionNumber'] },
//         { name: 'GRVNum', fields: ['GRVNum'] },
//         { name: 'ProductCode', fields: ['StockCode'] },
//         { name: 'SupplierCode', fields: ['SupplierCode'] },
//     ],
});

module.exports = TmpAuditGrvPrint;
