const { Sequelize, DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpAuditGRV = sequelize2.define('tmpauditgrv', {
    DateTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    InvoiceNumber: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    TransactionNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    StockCode: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    Description: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    QuantityReceived: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    ExclusiveUnitCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    InclusiveUnitCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    Markup: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    ExclusiveSelling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    InclusiveSelling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    VATPercentage: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    LineTotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    GRVNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    Subtotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    VAT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    SupplierCode: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    User: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    hisYear: {
        type: DataTypes.STRING(4),
        allowNull: true,
    },
    hisMonth: {
        type: DataTypes.STRING(2),
        allowNull: true,
    },
    hisDay: {
        type: DataTypes.STRING(2),
        allowNull: true,
    },
// }, {
//     tableName: 'tmpauditgrv',
//     timestamps: false,
//     indexes: [
//         { unique: true, fields: ['GRVNum', 'TransactionNumber'] },
//         { name: 'GRVNum', fields: ['GRVNum'] },
//         { name: 'ProductCode', fields: ['StockCode'] },
//         { name: 'SupplierCode', fields: ['SupplierCode'] },
//     ],
});

module.exports = TmpAuditGRV;
