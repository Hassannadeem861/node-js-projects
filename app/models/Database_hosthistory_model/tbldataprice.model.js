const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const  Tbldataprice = sequelize1.define(" tbldataprice", {
        Name: {
        type: Sequelize.STRING,
      },
});
  
module.exports   = Tbldataprice;