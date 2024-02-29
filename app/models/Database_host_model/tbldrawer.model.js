const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbldrawer = sequelize2.define("tbldrawer", {
        DrawerType: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        Range: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        Connector: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        Pulse: {
            type: Sequelize.STRING,
            defaultValue: null
        }
    });

    module.exports = Tbldrawer;
