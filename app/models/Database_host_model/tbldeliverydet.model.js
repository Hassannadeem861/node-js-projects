const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbldeliverydet = sequelize2.define("tbldeliverydet", {
        DateTime: {
            type: Sequelize.DATE,
        },
        invoiceNo: {
            type: Sequelize.DOUBLE,
        },
        DelNo: {
            type: Sequelize.DOUBLE,
        },
        LineNo: {
            type: Sequelize.DOUBLE,
        },
        StockCode: {
            type: Sequelize.STRING,
        },
        Description: {
            type: Sequelize.STRING,
        },
        SoldQty: {
            type: Sequelize.DOUBLE,
        },
        DelQty: {
            type: Sequelize.DOUBLE,
        },
        DispatchQty: {
            type: Sequelize.DOUBLE,
        },
        BalanceQty: {
            type: Sequelize.DOUBLE,
        },
        DoneBy: {
            type: Sequelize.STRING,
        }
    }, {
        indexes: [
            {
                name: 'CashupNum',
                fields: ['Description']
            },
            {
                name: 'TransactionNum',
                fields: ['invoiceNo']
            }
        ]
    });

    module.exports = Tbldeliverydet;

