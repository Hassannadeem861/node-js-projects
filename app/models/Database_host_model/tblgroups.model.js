// tblgroups.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblgroups = sequelize2.define("tblgroups", {
        GroupNo: {
        type: Sequelize.STRING,
      },
      GroupName: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports = Tblgroups;

  