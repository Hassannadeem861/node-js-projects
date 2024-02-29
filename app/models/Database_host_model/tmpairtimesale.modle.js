const { Sequelize, DataTypes } = require('sequelize');
const sequelize2 = require('../../config/host');

const TmpAirtimeSale = sequelize2.define('tmpairtimesale', {
    Salenum: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    TranNo: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    StockCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    ItemDescription: {
        type: DataTypes.STRING(60),
        allowNull: true,
    },
    VoucherSerialNo: {
        type: DataTypes.STRING(256),
        allowNull: true,
    },
    VoucherString: {
        type: DataTypes.STRING(256),
        allowNull: true,
    },
    VoucherCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    VoucherName: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    VocuherCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    VoucherVAT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    VocuherIsVAT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    ComputerName: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    UserName: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
// }, {
//     tableName: 'tmpairtimesale',
//     timestamps: false,
});

module.exports = TmpAirtimeSale;
