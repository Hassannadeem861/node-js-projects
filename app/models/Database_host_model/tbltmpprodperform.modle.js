const { Sequelize, DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tbltmpprodperform = sequelize2.define('tbltmpprodperform', {
    StockCode: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    StockDescription: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    ItemType: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    ItemSize: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    qauntity: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    tec: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    exclsell: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    gpvalue: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    gpp: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    soh: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    mdept: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    sub1: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    sub2: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    mdeptno: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    sub1no: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    sub2no: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    InclSelling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
// }, {
//     tableName: 'tbltmpprodperform',
//     timestamps: false,
});

module.exports = Tbltmpprodperform;
