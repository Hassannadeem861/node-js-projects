const { Sequelize } = require('sequelize');
const sequelize2 = require('../../config/host');
    const Tblcompany = sequelize2.define("tblcompany", {
        CompanyName: {
            type: Sequelize.STRING,
        },
        Address1: {
            type: Sequelize.STRING,
        },
        Address2: {
            type: Sequelize.STRING,
        },
        Address3: {
            type: Sequelize.STRING,
        }
   
        
    });

    module.exports = Tblcompany;
