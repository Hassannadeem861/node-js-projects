const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tmpinvprint = sequelize2.define("tmpinvprint", {
    stockcode: {
        type: Sequelize.STRING,
    },
    Description: {
        type: Sequelize.STRING,
    },
    Qty: {
        type: Sequelize.DOUBLE,
    },
    UnitPrice: {
        type: Sequelize.DOUBLE,
    },
    LineTotal: {
        type: Sequelize.DOUBLE,
    },
    INVDate: {
        type: Sequelize.STRING,
    },
    VATNUM: {
        type: Sequelize.STRING,
    },
    TotalLines: {
        type: Sequelize.INTEGER,
    },
    TotalWeight: {
        type: Sequelize.BIGINT,
    },
    InvoiceTotal: {
        type: Sequelize.DOUBLE,
    },
    VAT: {
        type: Sequelize.DOUBLE,
    },
    SaleNum: {
        type: Sequelize.DOUBLE,
    },
    ExclLineTotal: {
        type: Sequelize.DOUBLE,
    },
    AcctNum: {
        type: Sequelize.STRING,
    },
    AcctName: {
        type: Sequelize.STRING,
    },
    Address1: {
        type: Sequelize.STRING,
    },
    Address2: {
        type: Sequelize.STRING,
    },
    Address3: {
        type: Sequelize.STRING,
    },
    Comments1: {
        type: Sequelize.STRING,
    },
    Comments2: {
        type: Sequelize.STRING,
    },
    Comments3: {
        type: Sequelize.STRING,
    },
    Comments4: {
        type: Sequelize.STRING,
    },
    ExclUnitPrice: {
        type: Sequelize.DOUBLE,
    },
    ExclUnitSuRcharge: {
        type: Sequelize.DOUBLE,
    },
    OrderNo: {
        type: Sequelize.STRING,
    },
    Price: {
        type: Sequelize.STRING,
    },
    DiscountV: {
        type: Sequelize.DOUBLE,
    },
    ClerkU: {
        type: Sequelize.STRING,
    },
    Timet: {
        type: Sequelize.STRING,
    },
    Tendered: {
        type: Sequelize.DOUBLE,
    },
    Surcharge1: {
        type: Sequelize.DOUBLE,
    },
    Surcharge2: {
        type: Sequelize.DOUBLE,
    },
    Surcharge3: {
        type: Sequelize.DOUBLE,
    },
    SurchargeAmt1: {
        type: Sequelize.DOUBLE,
    },
    SurchargeAmt2: {
        type: Sequelize.DOUBLE,
    },
    SurchargeAmt3: {
        type: Sequelize.DOUBLE,
    }
});

module.exports = Tmpinvprint;
