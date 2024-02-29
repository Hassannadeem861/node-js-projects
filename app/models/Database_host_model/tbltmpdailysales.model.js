const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tbltmpdailysales = sequelize2.define('tbltmpdailysales', {
    DateTime: {
        type: Sequelize.DATE,
        // defaultValue: '0000-00-00 00:00:00',
    },
    CashSales: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    CardSales: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    ChequeSales: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    AccountSales: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    TotalExclCost: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    TotalInclCost: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    TotalExclSelling: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    TotalInclSelling: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    DayProfit: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    hisyear: {
        type: Sequelize.STRING(10),
        allowNull: true,
    },
    hisMonth: {
        type: Sequelize.STRING(10),
        allowNull: true,
    },
    hisDay: {
        type: Sequelize.STRING(10),
        allowNull: true,
    },
    Vat: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
// }, {
//     indexes: [
//         {
//             name: 'DebtorCode',
//             fields: ['CashSales'],
//         },
//     ],
//     tableName: 'tbltmpdailysales',
//     engine: 'InnoDB',
//     charset: 'latin1',
});

module.exports = Tbltmpdailysales;
