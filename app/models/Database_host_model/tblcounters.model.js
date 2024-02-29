const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblcounters = sequelize2.define("tblcounters", {
        InvNum: {
            type: Sequelize.DOUBLE,
        },
        CashupNum: {
            type: Sequelize.DOUBLE,
        },
        PayoutNum: {
            type: Sequelize.DOUBLE,
        },
        ComputerNo: {
            type: Sequelize.DOUBLE,
        },
        SaveSale: {
            type: Sequelize.DOUBLE,
        },
        QuoteNo: {
            type: Sequelize.DOUBLE,
        },
        LaybyeNo: {
            type: Sequelize.DOUBLE,
        },
        RepairNo: {
            type: Sequelize.DOUBLE,
        }
    });

    module.exports = Tblcounters;

