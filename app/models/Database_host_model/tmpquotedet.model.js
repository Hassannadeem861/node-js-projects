const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tmpquotedet = sequelize2.define("tmpquotedet", {
    DateTime: {
        type: Sequelize.DATE,
    },
    QuoteNum: {
        type: Sequelize.DOUBLE,
    },
    TRANSACTIONNO: {
        type: Sequelize.DOUBLE,
    },
    StockCode: {
        type: Sequelize.STRING,
    },
    StockDescription: {
        type: Sequelize.STRING,
    },
    QtyonQuote: {
        type: Sequelize.DOUBLE,
    },
    StockUnitPrice: {
        type: Sequelize.DOUBLE,
    },
    VatAmount: {
        type: Sequelize.DOUBLE,
    },
    LineTotal: {
        type: Sequelize.DOUBLE,
    },
    QuoteTotal: {
        type: Sequelize.DOUBLE,
    },
    UserName: {
        type: Sequelize.STRING,
    },
    hisYear: {
        type: Sequelize.STRING,
    },
    hisMonth: {
        type: Sequelize.STRING,
    },
    hisDay: {
        type: Sequelize.STRING,
    },
    CustomerCode: {
        type: Sequelize.STRING,
    },
    VATP: {
        type: Sequelize.DOUBLE,
    },
    ExclLineTotal: {
        type: Sequelize.DOUBLE,
    },
    lastcost: {
        type: Sequelize.DOUBLE,
    },
    averagecost: {
        type: Sequelize.DOUBLE,
    },
    majorno: {
        type: Sequelize.DOUBLE,
    },
    sub1no: {
        type: Sequelize.DOUBLE,
    },
    sub2no: {
        type: Sequelize.DOUBLE,
    }
// }, {
//     indexes: [
//         {
//             fields: ['QuoteNum']
//         },
//         {
//             fields: ['CashupNum']
//         }
//     ]
});

module.exports = Tmpquotedet;
