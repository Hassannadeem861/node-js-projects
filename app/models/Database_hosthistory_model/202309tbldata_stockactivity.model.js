const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_stockactivity= sequelize1.define("202309tbldata_stockactivity", {
        datetime: {
            type: Sequelize.DATE,
            
            
        },
        stockcode: {
            type: Sequelize.STRING,
            
            
        },
        description: {
            type: Sequelize.STRING,
            
            
        },
        user: {
            type: Sequelize.STRING,
            
            
        },
        avgcost: {
            type: Sequelize.DOUBLE,
            
            
        },
        newavgcost: {
            type: Sequelize.DOUBLE,
            
            
        },
        lastavgcost: {
            type: Sequelize.DOUBLE,
            
            
        },
        newlastavgcost: {
            type: Sequelize.DOUBLE,
            
            
        },
        defselling: {
            type: Sequelize.DOUBLE,
            
            
        },
        newdefselling: {
            type: Sequelize.DOUBLE,
            
            
        },
        pricedescription: {
            type: Sequelize.STRING,
            
            
        },
        oldprice: {
            type: Sequelize.DOUBLE,
            
            
        },
        newprice: {
            type: Sequelize.DOUBLE,
            
            
        },
        Hisyear: {
            type: Sequelize.STRING,
            
            
        },
        HisMonth: {
            type: Sequelize.STRING,
            
            
        },
        Hisday: {
            type: Sequelize.STRING,
            
            
        },
        valuechange: {
            type: Sequelize.DOUBLE,
            
            
        },
        stockdescription: {
            type: Sequelize.STRING,
            
            
        },
        majorno: {
            type: Sequelize.DOUBLE,
            
            
        },
        sub1no: {
            type: Sequelize.DOUBLE,
            
            
        },
        sub2no: {
            type: Sequelize.DOUBLE,
            
            
        },
        openqty: {
            type: Sequelize.DOUBLE,
            
            
        },
        closeQty: {
            type: Sequelize.DOUBLE,
            
            
        },
        soldQty: {
            type: Sequelize.DOUBLE,
            
            
        },
        receivedqty: {
            type: Sequelize.DOUBLE,
            
            
        },
        adjustedQty: {
            type: Sequelize.DOUBLE,
            
            
        },
        stocktakediffQty: {
            type: Sequelize.DOUBLE,
            
            
        },
        usedincombinedQty: {
            type: Sequelize.DOUBLE,
            
            
        },
        soldtotalexclselling: {
            type: Sequelize.DOUBLE,
            
            
        },
        soldtotalcost: {
            type: Sequelize.DOUBLE,
            
            
        },
        rectotalexclselling: {
            type: Sequelize.DOUBLE,
            
            
        },
        rectotalcost: {
            type: Sequelize.DOUBLE,
            
            
        }
    });
  
    module.exports =  Tbldata_stockactivity;

