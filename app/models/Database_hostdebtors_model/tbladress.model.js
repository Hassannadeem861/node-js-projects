// tbldeladdress.model.js
const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');
    const Tbldeladdress = sequelize3.define("tbladdress", {
      DelAddCode: {
        type: Sequelize.DOUBLE,
        
      },
      CustomerCode: {
        type: Sequelize.STRING,
      },
      CustomerDadd1: {
        type: Sequelize.STRING,
      },
      CustomerDadd2: {
        type: Sequelize.STRING,
      },
      CustomerDadd3: {
        type: Sequelize.STRING,
      },
      CustomerDCode: {
        type: Sequelize.STRING,
      },
      DefaultAdd: {
        type: Sequelize.TINYINT,
      },
    }
    );
  
    module.exports= Tbldeladdress;