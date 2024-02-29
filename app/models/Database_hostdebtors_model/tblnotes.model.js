// tblnotes.model.js

const { Sequelize } = require('sequelize');
const sequelize3 = require('../../config/hostdebtors');
    const Tblnote = sequelize3.define("tblnotes", {
        Datetime: {
            type: Sequelize.DATE,
            allowNull: false // Assuming Date should not be null
        },
        DebtorCode: {
            type: Sequelize.STRING
        },
        NoteNo: {
            type: Sequelize.STRING
        },
        DNote: {
            type: Sequelize.STRING
        },
        User: {
            type: Sequelize.STRING
        },
        
    });
  
    module.exports= Tblnote;
  