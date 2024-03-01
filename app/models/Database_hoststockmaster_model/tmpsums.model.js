const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const Tmpsums = sequelize4.define('tmpsums', {
    StockCode: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    RCost: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    RSelling: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
// }, {
//     timestamps: false, // If you don't want Sequelize to add timestamps
});

module.exports = Tmpsums;
