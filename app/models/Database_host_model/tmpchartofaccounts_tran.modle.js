const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpChartOfAccountsTran = sequelize2.define('tmpchartofaccounts_tran', {
    DateTime: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    Account_code: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Account_Name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    SubAccountCode: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    SubAccountName: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    AccComments: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    AcctReason: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    AcctVatable: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    Amount: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    VatAmount: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    DoneBy: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    BlankString1: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    BlankString2: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    CashupDone: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    CashupNo: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    HisDay: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    HisMonth: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    HisYear: {
        type: Sequelize.STRING,
        allowNull: true,
    },
// }, {
//     timestamps: false,
});

module.exports = TmpChartOfAccountsTran;
