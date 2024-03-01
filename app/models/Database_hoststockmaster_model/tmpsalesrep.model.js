    const { DataTypes } = require('sequelize');
    const sequelize4 = require('../../config/hoststockmaster');

    const Tmpsalesrep = sequelize4.define('tmpsalesrep', {
        DateTime: {
            type: DataTypes.DATE,
            allowNull: false,
            // defaultValue: '0000-00-00 00:00:00',
        },
        SaleNum: {
            type: DataTypes.STRING(30),
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
    // }, {
    //     timestamps: false,
    });

    module.exports = Tmpsalesrep;
