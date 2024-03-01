const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TmpTransport = sequelize4.define('tmptransport', {
    Transport_Amount: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    Transport_Description: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    Transport_KM: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    Comments: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    ComputerName: {
        type: DataTypes.STRING(50),
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
//     // Additional table configurations can be added here
});

module.exports = TmpTransport;
