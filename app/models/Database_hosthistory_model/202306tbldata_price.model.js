// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldata_price = sequelize1.define("202306tbldata_price", {
        DateTime: {
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
        type: Sequelize.STRING,
      },
      newavgcost: {
        type: Sequelize.STRING,
      },
      lastavgcost: {
        type: Sequelize.STRING,
      },
      newlastavgcost: {
        type: Sequelize.STRING,
      },
      
      
      defselling: {
        type: Sequelize.STRING,
      },
      newdefselling: {
        type: Sequelize.STRING,
      },
      pricedescription: {
        type: Sequelize.STRING,
      },
      oldprice: {
        type: Sequelize.STRING,
      },
      newprice: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
      },

    });
  
    module.exports =  Tbldata_price;
  
  