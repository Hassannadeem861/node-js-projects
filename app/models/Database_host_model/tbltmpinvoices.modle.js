const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tbltmpinvoices = sequelize2.define('tbltmpinvoices', {
    DateTime: {
        type: Sequelize.DATE,
        // defaultValue: '0000-00-00 00:00:00',
    },
    invoiceNo: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
    },
    PaymentType: {
        type: Sequelize.STRING(25),
        allowNull: true,
    },
    InvoiceTotal: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    CashierName: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    AccountNum: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    hisYear: {
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
    ComputerName: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    // }, {
    //     indexes: [
    //         {
    //             name: 'DebtorCodeIndex',
    //             fields: ['invoiceNo'],
    //         },
    //     ],
    //     tableName: 'tbltmpinvoices',
    //     engine: 'InnoDB',
    //     charset: 'latin1',
});

module.exports = Tbltmpinvoices;
