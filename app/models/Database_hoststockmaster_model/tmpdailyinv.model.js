const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpDailyInv = sequelize4.define('tmpdailyinv', {
    Date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: '0000-00-00 00:00:00',
    },
    SaleNum: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
    },
    AuditNum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    VAT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    Total: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    PaymentType: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: null,
    },
    AccountNum: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    ExternalOrderNum: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null,
    },
    ClerkName: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: null,
    },
});

module.exports = TmpDailyInv;
