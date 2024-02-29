const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIBTCounter = sequelize4.define('tbl_ibt_counter', {
    IBTCounter: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
});

module.exports = TblIBTCounter;
