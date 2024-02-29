const { Sequelize, DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tbltmpprodperform1 = sequelize2.define('tbltmpprodperform1', {
    StockCode: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    StockDescription: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
    Quantity: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    TEC: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    Location: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    ExclSell: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    GPValue: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    GPP: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    SOH: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    MDept: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Sub1: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    Sub2: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    MdeptNo: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Sub1No: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Sub2No: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
// }, {
//     tableName: 'tbltmpprodperform1',
//     timestamps: false,
});

module.exports = Tbltmpprodperform1;
