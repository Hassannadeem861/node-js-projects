const { DataTypes } = require('sequelize');
const sequelize4 = require('../../config/hoststockmaster');

const TblIbtUsers = sequelize4.define('tbl_ibt_users', {
    UserName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
    },
    UserDescription: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },
    Password: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: null,
    },
    Suspended: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    LastAccessed: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    Created: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    LoggedIn: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
    },
    SignedOff: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
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
        defaultValue: null,
    },
    StoreMainODBC: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    Status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
}, {
    primaryKey: true,
});

module.exports = TblIbtUsers;
