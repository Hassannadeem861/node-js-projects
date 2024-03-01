const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpDataSalesRep = sequelize4.define('tmpdata_salesrep', {
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
        defaultValue: null,
    },
    RepName: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    InvoiceTExclCost: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    InvoiceTInclCost: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    InvoiceTExclSelling: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    InvoiceTInclSelling: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    InvoiceVAT: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    UserName: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    HisDay: {
        type: DataTypes.STRING(2),
        defaultValue: null,
    },
    HisMonth: {
        type: DataTypes.STRING(2),
        defaultValue: null,
    },
    HisYear: {
        type: DataTypes.STRING(4),
        defaultValue: null,
    },
// }, {
//     tableName: 'tmpdata_salesrep', // Set the table name explicitly
//     timestamps: false, // Disable timestamps (createdAt, updatedAt)
});

module.exports = TmpDataSalesRep;
