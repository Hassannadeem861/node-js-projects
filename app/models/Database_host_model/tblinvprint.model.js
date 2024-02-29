// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblinvprint = sequelize2.define("tblinvprint", {

        stockcode: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        Description: {
            type: Sequelize.STRING(75),
            allowNull: true
        },
        Qty: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        UnitPrice: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        VAT: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        LineTotal: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        VATNUM: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        TotalLines: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        TotalWeight: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        InvoiceTotal: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        SaleNum: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        ExclLineTotal: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        AcctNum: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        AcctName: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Address1: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Address2: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Address3: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Comments1: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Comments2: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Comments3: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Comments4: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        ExclUnitPrice: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        OrderNo: {
            type: Sequelize.STRING(25),
            allowNull: true
        },
        Price: {
            type: Sequelize.STRING(15),
            allowNull: true
        },
        DiscountV: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        ClerkU: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        Timet: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        Tendered: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        INVDate: {
            type: Sequelize.STRING(30),
            allowNull: true
        }
    });



  
    module.exports = Tblinvprint; // 'tblgrvcombined' instead of 'Tblgrvcombined'

