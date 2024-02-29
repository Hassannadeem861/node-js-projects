const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIbtLocations = sequelize4.define('tbl_ibt_locations', {
    StoreName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    StoreODBC: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    LocationStatus: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    WarehouseDebtorCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
});

module.exports = TblIbtLocations;
