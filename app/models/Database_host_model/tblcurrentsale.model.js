const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblcurrentsale = sequelize2.define("tblcurrentsale", {
        DateTime: {
            type: Sequelize.DATE,
        },
        SaleNum: {
            type: Sequelize.INTEGER,
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
        TableDiscount: {
            type: Sequelize.DOUBLE,
       },
        ItemDiscount: {
            type: Sequelize.DOUBLE,
       },
        ValueDiscount: {
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
        ClerkNum: {
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
        CookingMsg: {
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
        TipAmount: {
            type: Sequelize.DOUBLE,
       },
        AccInvoiceNum: {
            type: Sequelize.INTEGER,
       },
        Comment: {
            type: Sequelize.STRING,
       },
        CashupNum: {
            type: Sequelize.INTEGER,
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
        PersonCnt: {
            type: Sequelize.DOUBLE,
       },
        ClerkCashup: {
            type: Sequelize.BOOLEAN,
       }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['SaleNum', 'TransactionNum', 'StockCode']
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
                name: 'SerialNum',
                fields: ['SerialNum']
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

    module.exports = Tblcurrentsale;

