// tblexcelfile.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblexcelfile = sequelize2.define("tblexcelfile", {
      a: {
        type: Sequelize.DOUBLE,
      },
      b: {
        type: Sequelize.DOUBLE,
      },
      c: {
        type: Sequelize.DOUBLE,
      },
    });
  
    module.exports = Tblexcelfile;
  
  