const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIbtUsersAccess = sequelize4.define('tbl_ibt_users_access', {
    UserName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
    },
    PermissionKey: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
    },
    UModule: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    PositionKey: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    StoreLocationName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
    },
    StoreLocationODBC: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
    },
    StoreMainName: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    StoreMainODBC: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    Status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
// }, {
//     primaryKey: true,
});

module.exports = TblIbtUsersAccess;
