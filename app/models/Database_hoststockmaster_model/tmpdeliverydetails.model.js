const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpDeliveryDetails = sequelize4.define('tmpdeliverydetails', {
    DateTime: {
        type: DataTypes.DATE,
        // defaultValue: '0000-00-00 00:00:00',
    },
    SaleNum: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    CustomerCode: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    },
    CustomerName: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    CustAdd1: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    Custadd2: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    CustAdd3: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    CustCell: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    CustPhone: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    DeliveryDate: {
        type: DataTypes.DATE,
        defaultValue: null,
    },
    HisDay: {
        type: DataTypes.STRING(10),
        defaultValue: null,
    },
    HisMonth: {
        type: DataTypes.STRING(10),
        defaultValue: null,
    },
    HisYear: {
        type: DataTypes.STRING(10),
        defaultValue: null,
    },
// }, {
//     timestamps: false, // Disable timestamps (createdAt, updatedAt)
//     primaryKey: 'SaleNum', // Set SaleNum as the primary key
});

module.exports = TmpDeliveryDetails;
