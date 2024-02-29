const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');
    const Tbldebtor_groups = sequelize3.define("tbldebtor_groups", {
        GroupName: {
        type: Sequelize.STRING,
      },
    });
  
    module.exports= Tbldebtor_groups;
