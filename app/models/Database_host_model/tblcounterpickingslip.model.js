const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblcounterpickingslip = sequelize2.define("tblcounterpickingslip", {
        Description: {
            type: Sequelize.STRING,
        },
        Qty: {
            type: Sequelize.DOUBLE,
        },
        SlipType: {
            type: Sequelize.DOUBLE,
        },
        TranID: {
            type: Sequelize.DOUBLE,
        },
        Blank2: {
            type: Sequelize.STRING,
        },
        Blank3: {
            type: Sequelize.STRING,
        }
    });

    module.exports = Tblcounterpickingslip;

