const { Sequelize, DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const Tbltmpstockmove = sequelize2.define('tbltmpstockmove', {
    datetime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    stockcode: {
        type: DataTypes.STRING(75),
        allowNull: true,
    },
    stockdescription: {
        type: DataTypes.STRING(75),
        allowNull: true,
    },
    majorno: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    sub1no: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    sub2no: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    openqty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    closeQty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    soldQty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    receivedqty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    adjustedQty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    stocktakediffQty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    usedincombinedQty: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    soldtotalexclselling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    soldtotalcost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    rectotalexclselling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    rectotalcost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    Hisday: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    HisMonth: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    Hisyear: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
}, {
    tableName: 'tbltmpstockmove',
    timestamps: false,
});

module.exports = Tbltmpstockmove;
