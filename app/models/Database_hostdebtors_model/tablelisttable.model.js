// tutorial.model.js

const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');

// const dataUser = sequelize3.define('dataUser', {
// module.exports = (sequelize, Sequelize) => {
    const Tbl_list = sequelize3.define("tbllisttable", {
        name: {
        type: Sequelize.STRING,
      },
      
    });
  
   module.exports = Tbl_list;