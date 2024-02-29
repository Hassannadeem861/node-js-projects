const { Sequelize } = require('sequelize');
const sequelize1 = require('../../config/hostthisstory');
    const  Tbldatapayout = sequelize1.define(" tbldatapayout", {
        Name: {
        type: Sequelize.STRING,
      },
});
  
module.exports   = Tbldatapayout;