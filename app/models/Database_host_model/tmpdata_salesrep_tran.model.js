const { Sequelize } = require('sequelize');
const sequelize = require('../../config/host');

const Tmpdata_salesrep_tran = sequelize.define("tmpdata_salesrep_tran", {
    DateTime: {
        type: Sequelize.DATE,
    },
    SaleNum: {
        type: Sequelize.DOUBLE,
    },
    TransactionNum: {
        type: Sequelize.INTEGER,
    },
    StockCode: {
        type: Sequelize.STRING,
    },
    StockDescription: {
        type: Sequelize.STRING,
    },
    MajorNo: {
        type: Sequelize.DOUBLE,
    },
    Sub1No: {
        type: Sequelize.DOUBLE,
    },
    Sub2No: {
        type: Sequelize.DOUBLE,
    },
    CreditInvoiceNo: {
        type: Sequelize.DOUBLE,
    },
    UnitVAT: {
        type: Sequelize.DOUBLE,
    },
    ItemVAT: {
        type: Sequelize.DOUBLE,
    },
    Qty: {
        type: Sequelize.DOUBLE,
    },
    StockUnitPrice: {
        type: Sequelize.DOUBLE,
    },
    VatPercentage: {
        type: Sequelize.DOUBLE,
    },
    VatFlag: {
        type: Sequelize.BOOLEAN,
    },
    PercDiscount: {
        type: Sequelize.STRING,
    },
    ClerkName: {
        type: Sequelize.STRING,
    },
    PaymentType: {
        type: Sequelize.STRING,
    },
    ChequeNum: {
        type: Sequelize.STRING,
    },
    CardNum: {
        type: Sequelize.STRING,
    },
    AccountNum: {
        type: Sequelize.STRING,
    },
    Carwash: {
        type: Sequelize.STRING,
    },
    ExternalOrderNum: {
        type: Sequelize.STRING,
    },
    SerialItem: {
        type: Sequelize.TEXT,
    },
    ComputerName: {
        type: Sequelize.STRING,
    },
    SerialNum: {
        type: Sequelize.STRING,
    },
    AverageCostPrice: {
        type: Sequelize.DOUBLE,
    },
    LastCostPrice: {
        type: Sequelize.DOUBLE,
    },
    LineTotal: {
        type: Sequelize.DOUBLE,
    },
    InvoiceTotal: {
        type: Sequelize.DOUBLE,
    },
    PickingSlip: {
        type: Sequelize.DOUBLE,
    },
    AccInvoiceNum: {
        type: Sequelize.DOUBLE,
    },
    Comment: {
        type: Sequelize.STRING,
    },
    CashupNum: {
        type: Sequelize.DOUBLE,
    },
    InCashUp: {
        type: Sequelize.BOOLEAN,
    },
    PosSale: {
        type: Sequelize.BOOLEAN,
    },
    Transfer: {
        type: Sequelize.BOOLEAN,
    },
    Tendered: {
        type: Sequelize.DOUBLE,
    },
    hisYear: {
        type: Sequelize.STRING,
    },
    hisMonth: {
        type: Sequelize.STRING,
    },
    hisday: {
        type: Sequelize.STRING,
    },
    sliptype: {
        type: Sequelize.DOUBLE,
    },
    ClerkCashup: {
        type: Sequelize.BOOLEAN,
    },
    SalesRepCode: {
        type: Sequelize.STRING,
    },
    SalesRepName: {
        type: Sequelize.STRING,
    }
}, {
    indexes: [
        {
            name: 'PRIMARY',
            fields: ['TransactionNum', 'SaleNum']
        },
        {
            name: 'AccInvoiceNum',
            fields: ['AccInvoiceNum']
        },
        {
            name: 'CashupNum',
            fields: ['CashupNum']
        },
        {
            name: 'ExternalOrderNum',
            fields: ['ExternalOrderNum']
        },
        {
            name: 'SaleNum',
            fields: ['SaleNum']
        },
        {
            name: 'SerialNum',
            fields: ['SerialNum']
        },
        {
            name: 'StockCode',
            fields: ['StockCode']
        },
        {
            name: 'tblStockRecordtblAuditSales',
            fields: ['StockCode']
        },
        {
            name: 'TransactionNum',
            fields: ['TransactionNum']
        }
    ]
});

module.exports = Tmpdata_salesrep_tran;
