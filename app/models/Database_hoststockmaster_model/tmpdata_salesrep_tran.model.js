const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpDataSalesRepTran = sequelize4.define('tmpdata_salesrep_tran', {
    DateTime: {
        type: DataTypes.DATE,
        // defaultValue: '0000-00-00 00:00:00',
    },
    SaleNum: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    TransactionNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    StockCode: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
    },
    StockDescription: {
        type: DataTypes.STRING(75),
        defaultValue: null,
    },
    MajorNo: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    Sub1No: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    Sub2No: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    CreditInvoiceNo: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    UnitVAT: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    ItemVAT: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    Qty: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    StockUnitPrice: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    VatPercentage: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    VatFlag: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
    },
    PercDiscount: {
        type: DataTypes.STRING(10),
        defaultValue: null,
    },
    ClerkName: {
        type: DataTypes.STRING(30),
        defaultValue: null,
    },
    PaymentType: {
        type: DataTypes.STRING(15),
        defaultValue: null,
    },
    ChequeNum: {
        type: DataTypes.STRING(20),
        defaultValue: null,
    },
    CardNum: {
        type: DataTypes.STRING(20),
        defaultValue: null,
    },
    AccountNum: {
        type: DataTypes.STRING(16),
        defaultValue: null,
    },
    Carwash: {
        type: DataTypes.STRING(255),
        defaultValue: null,
    },
    ExternalOrderNum: {
        type: DataTypes.STRING(20),
        defaultValue: null,
    },
    SerialItem: {
        type: DataTypes.TEXT,
        defaultValue: null,
    },
    ComputerName: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    SerialNum: {
        type: DataTypes.STRING(255),
        defaultValue: null,
    },
    AverageCostPrice: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    LastCostPrice: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    LineTotal: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    InvoiceTotal: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    PickingSlip: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    AccInvoiceNum: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    Comment: {
        type: DataTypes.STRING(124),
        defaultValue: null,
    },
    CashupNum: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    InCashUp: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
    },
    PosSale: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
    },
    Transfer: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
    },
    Tendered: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    HisYear: {
        type: DataTypes.STRING(4),
        defaultValue: null,
    },
    HisMonth: {
        type: DataTypes.STRING(2),
        defaultValue: null,
    },
    HisDay: {
        type: DataTypes.STRING(2),
        defaultValue: null,
    },
    Sliptype: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    ClerkCashup: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
    },
    SalesRepCode: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    SalesRepName: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
// }, {
//     tableName: 'tmpdata_salesrep_tran',
//     timestamps: false,
//     primaryKey: {
//         name: 'TransactionNum',
//         allowNull: false,
//     },
});

module.exports = TmpDataSalesRepTran;
