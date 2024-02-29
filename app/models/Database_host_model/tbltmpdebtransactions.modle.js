const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tbltmpdebtransactions = sequelize2.define('tbltmpdebtransactions', {
    DateTime: {
        type: Sequelize.DATE,
        allowNull: false,
        // defaultValue: '0000-00-00 00:00:00',
    },
    DebtorCode: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: '',
    },
    Reference: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: '',
    },
    Description: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    TransType: {
        type: Sequelize.STRING(2),
        allowNull: true,
    },
    Amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
    },
    AccInvoiceNum: {
        type: Sequelize.STRING(20),
        allowNull: true,
    },
    hisYear: {
        type: Sequelize.STRING(4),
        allowNull: true,
    },
    hisMonth: {
        type: Sequelize.STRING(2),
        allowNull: true,
    },
    hisDay: {
        type: Sequelize.STRING(2),
        allowNull: true,
    },
    OpenItemStateNum: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    InvNum: {
        type: Sequelize.STRING(20),
        allowNull: true,
    },
    Vat: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    BFDate: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    UserName: {
        type: Sequelize.STRING(30),
        allowNull: true,
    },
    DebtorName: {
        type: Sequelize.STRING(40),
        allowNull: true,
    },
// }, {
//     primaryKey: true,
//     indexes: [
//         {
//             name: 'DebtorCodeIndex',
//             fields: ['DebtorCode'],
//         },
//     ],
//     tableName: 'tbltmpdebtransactions',
//     engine: 'InnoDB',
//     charset: 'latin1',
});

module.exports = Tbltmpdebtransactions;
