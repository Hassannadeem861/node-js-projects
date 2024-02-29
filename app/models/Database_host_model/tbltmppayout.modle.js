const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tbltmppayout = sequelize2.define("tbltmppayout", {
    TransactionNum: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: null
    },
    datetime: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
    },
    Clerk_Name: {
        type: Sequelize.STRING(75),
        allowNull: true,
        defaultValue: null
    },
    Amount: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: null
    },
    Reason: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
    },
    CashupNum: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    Incashup: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    Computername: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null
    },
    PosPayout: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    ClerkCashup: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    Hisyear: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: null
    },
    HisMonth: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: null
    },
    Hisday: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: null
    }
// }, {
//     tableName: 'tbltmppayout',
//     timestamps: false // If you don't want createdAt and updatedAt columns
});

module.exports = Tbltmppayout;
