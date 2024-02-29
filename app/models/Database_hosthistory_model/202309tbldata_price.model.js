const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_price = sequelize1.define("202309tbldata_price", {
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
        
      }
    });
  
    module.exports =  Tbldata_price;

