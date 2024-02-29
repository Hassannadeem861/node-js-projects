const { DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpDataCurrentTran = sequelize2.define('tmpdata_current_tran', {
    DateTime: {
        type: DataTypes.DATE,
        // defaultValue: '0000-00-00 00:00:00',
    },
    SaleNum: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
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
        allowNull: true,
    },
    MajorNo: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    Sub1No: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    Sub2No: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    CreditInvoiceNo: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    UnitVAT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    ItemVAT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    Qty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    StockUnitPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    VatPercentage: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    VatFlag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    PercDiscount: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    ClerkName: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    PaymentType: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    ChequeNum: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    CardNum: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    AccountNum: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    Carwash: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    ExternalOrderNum: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    SerialItem: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    ComputerName: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    SerialNum: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    AverageCostPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    LastCostPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    LineTotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    InvoiceTotal: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    PickingSlip: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    AccInvoiceNum: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    Comment: {
        type: DataTypes.STRING(124),
        allowNull: true,
    },
    CashupNum: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    InCashUp: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    PosSale: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    Transfer: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    Tendered: {
        type: DataTypes.DOUBLE,
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
    hisday: {
        type: DataTypes.STRING(2),
        allowNull: true,
    },
    sliptype: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    ClerkCashup: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
// }, {
//     tableName: 'tmpdata_current_tran',
//     timestamps: false,
//     indexes: [
//         {
//             name: 'primary_key',
//             fields: ['TransactionNum', 'SaleNum'],
//         },
//         {
//             name: 'AccInvoiceNumIndex',
//             fields: ['AccInvoiceNum'],
//         },
//         {
//             name: 'CashupNumIndex',
//             fields: ['CashupNum'],
//         },
//         {
//             name: 'ExternalOrderNumIndex',
//             fields: ['ExternalOrderNum'],
//         },
//         {
//             name: 'SaleNumIndex',
//             fields: ['SaleNum'],
//         },
//         {
//             name: 'SerialNumIndex',
//             fields: ['SerialNum'],
//         },
//         {
//             name: 'StockCodeIndex',
//             fields: ['StockCode'],
//         },
//         {
//             name: 'tblStockRecordtblAuditSalesIndex',
//             fields: ['StockCode'],
//         },
//         {
//             name: 'TransactionNumIndex',
//             fields: ['TransactionNum'],
//         },
//     ],
});

module.exports = TmpDataCurrentTran;
