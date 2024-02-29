const { Sequelize, DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpAuditGRVO = sequelize2.define('tmpauditgrvo', {
    DateTime: {
        type: DataTypes.DATE,

    },
    InvoiceNumber: {
        type: DataTypes.STRING,

    },
    TransactionNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    StockCode: {
        type: DataTypes.STRING,

    },
    Description: {
        type: DataTypes.STRING,

    },
    QuantityReceived: {
        type: DataTypes.DOUBLE,

    },
    ExclusiveUnitCost: {
        type: DataTypes.DOUBLE,

    },
    InclusiveUnitCost: {
        type: DataTypes.DOUBLE,

    },
    Markup: {
        type: DataTypes.DOUBLE,

    },
    ExclusiveSelling: {
        type: DataTypes.DOUBLE,

    },
    InclusiveSelling: {
        type: DataTypes.DOUBLE,

    },
    VATPercentage: {
        type: DataTypes.DOUBLE,

    },
    LineTotal: {
        type: DataTypes.DOUBLE,

    },
    GRVNum: {
        type: DataTypes.INTEGER
    },
    Subtotal: {
        type: DataTypes.DOUBLE,

    },
    VAT: {
        type: DataTypes.DOUBLE,

    },
    SupplierCode: {
        type: DataTypes.STRING,

    },
    User: {
        type: DataTypes.STRING,

    },
    hisYear: {
        type: DataTypes.STRING,

    },
    hisMonth: {
        type: DataTypes.STRING,

    },
    hisDay: {
        type: DataTypes.STRING,

    },
    // }, {
    //     tableName: 'tmpauditgrvo',
    //     timestamps: false,
});

module.exports = TmpAuditGRVO;
