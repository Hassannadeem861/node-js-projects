const { DataTypes } = require('sequelize');
const sequelize = require('../../config/host');

const TmpDataSalesRep = sequelize.define('tmpdata_salesrep', {
    DateTime: {
        type: DataTypes.DATE,
        // defaultValue: '0000-00-00 00:00:00',
    },
    SaleNum: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        // primaryKey: true,
    },
    Repcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    RepName: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    InvoiceTExclCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    InvoiceTInclCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    InvoiceTExclSelling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    InvoiceTInclSelling: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    InvoiceVAT: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    UserName: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    HisDay: {
        type: DataTypes.STRING(2),
        allowNull: true,
    },
    HisMonth: {
        type: DataTypes.STRING(2),
        allowNull: true,
    },
    HisYear: {
        type: DataTypes.STRING(4),
        allowNull: true,
    },
// }, {
//     tableName: 'tmpdata_salesrep',
//     timestamps: false,
});

module.exports = TmpDataSalesRep;
