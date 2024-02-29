// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const Tmp = sequelize1.define("tbltmp", {
      StockCode: {
        type: Sequelize.STRING,
        
      },
      InvoiceNumber: {
        type: Sequelize.STRING,
        
      },
      Description: {
        type: Sequelize.STRING,
        
      },
      Field1: {
        type: Sequelize.DOUBLE,
        
      },
      Field2: {
        type: Sequelize.DOUBLE,
        
      },
      Field3: {
        type: Sequelize.DOUBLE,
        
      },
      Field4: {
        type: Sequelize.DOUBLE,
        
      },
      Field5: {
        type: Sequelize.DOUBLE,
        
      },
      Field6: {
        type: Sequelize.DOUBLE,
        
      },
      Field7: {
        type: Sequelize.DOUBLE,
        
      },
      ClerkName: {
        type: Sequelize.STRING,
        
      }
    });
  
    module.exports =  Tmp;
  
  