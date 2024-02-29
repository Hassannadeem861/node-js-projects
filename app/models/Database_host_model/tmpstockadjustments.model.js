// tutorial.model.js
const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tmpstockadjustments = sequelize2.define("tmpstockadjustments", {
        StockCode: {
            type: Sequelize.STRING(19),
            allowNull: true
        },
        Description: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        OldQty: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        NewQty: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        Hisday: {
            type: Sequelize.STRING(10),
            allowNull: true
        },
        HisMonth: {
            type: Sequelize.STRING(10),
            allowNull: true
        },
        HisYear: {
            type: Sequelize.STRING(10),
            allowNull: true
        },
        AdjQty: {
            type: Sequelize.DOUBLE,
            allowNull: true
        }
          });
  
          module.exports = Tmpstockadjustments;
  
  