const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpCashBankTran = sequelize2.define('tmpcashbank_tran', {
    DateTime: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Reason: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    DoneBy: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    AmountDebt: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    AmountCredit: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    RunningTotal: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    Blank1: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    Blank2: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    Blank3: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    Blank5: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    TranType: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    TranDay: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    TranMonth: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    TranYear: {
        type: Sequelize.STRING,
        allowNull: true,
    },
}, {
    // Additional options can be added here
});

module.exports = TmpCashBankTran;
