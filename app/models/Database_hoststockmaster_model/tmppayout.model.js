const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpPayout = sequelize4.define('tmppayout', {
    TransactionNum: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
    },
    Date: {
        type: DataTypes.DATE,
        defaultValue: null,
    },
    Clerk_Name: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    Amount: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    Reason: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    CashupNum: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    InCashUp: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
    },
    ComputerName: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    POSPayOut: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
    },
    ClerkCashup: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
    },
    HisYear: {
        type: DataTypes.STRING(10),
        defaultValue: null,
    },
    HisMonth: {
        type: DataTypes.STRING(4),
        defaultValue: null,
    },
    HisDay: {
        type: DataTypes.STRING(4),
        defaultValue: null,
    },
// }, {
//     // Define primary key
//     primaryKey: 'TransactionNum',
//     // Additional table configurations can be added here
});

module.exports = TmpPayout;
