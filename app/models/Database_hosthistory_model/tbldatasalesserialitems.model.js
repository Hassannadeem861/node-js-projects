// 202306tbldata_cancel_tran.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tbldatasalesserialitems = sequelize1.define("tbldatasalesserialitems", {
        Name: {
        type: Sequelize.STRING,
      },
});
  
    module.exports =  Tbldatasalesserialitems;
  
  