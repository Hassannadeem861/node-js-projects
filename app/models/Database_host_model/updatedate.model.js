// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Updatedate = sequelize2.define("updatedate", {
        LastUpdate: {
        type: Sequelize.DATE,
      },
    
    });
  
    module.exports = Updatedate;
  
  