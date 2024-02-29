// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tbllisttable = sequelize2.define("tbllisttable", {
        Name: {
            type: Sequelize.STRING(30),
          },
    });
  
    module.exports = Tbllisttable;

  