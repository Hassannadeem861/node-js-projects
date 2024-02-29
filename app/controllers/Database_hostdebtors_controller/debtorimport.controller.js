// const db = require("../models");
// const Debtorimport = db.debtorimport;

// const Op = db.Sequelize.Op;
const Debtorimport = require("../../models/Database_hostdebtors_model/debtorimport.model");


// Create and Save a new Debtorimport
exports.create = (req, res) => {
 

  // Create a Debtorimport
  const debtorimport = {
    DebtorCode: req.body.DebtorCode,
    DebtorName: req.body.DebtorName,
    DebtorInitials: req.body.DebtorInitials,
    DebtorTitle: req.body.DebtorTitle,
    DebtorJoinDate: req.body.DebtorJoinDate,
    DebtorCodeNumber: req.body.DebtorCodeNumber,
    DebtorAdd1: req.body.DebtorAdd1,
    DebtorAdd2: req.body.DebtorAdd2,
    DebtorAdd3: req.body.DebtorAdd3,
    DebtorAddPosCode: req.body.DebtorAddPosCode,
    DebtorPost1: req.body.DebtorPost1,
    DebtorPost2: req.body.DebtorPost2,
    DebtorPost3: req.body.DebtorPost3,
    DebtorPostalCode: req.body.DebtorPostalCode,
    DebtorCity: req.body.DebtorCity,
    DebtorCountry: req.body.DebtorCountry,
    DebtorContact: req.body.DebtorContact,
    DebtorCell: req.body.DebtorCell,
    DebtorPhone: req.body.DebtorPhone,
    DebtorFax: req.body.DebtorFax,
    DebtorEMail: req.body.DebtorEMail,
    CreditLimit: req.body.CreditLimit,
    CurrentBalance: req.body.CurrentBalance,
    BalanceForward: req.body.BalanceForward,
    _30days: req.body._30days,
    _60days: req.body._60days,
    _90days: req.body._90days,
    _120days: req.body._120days,
    _150days: req.body._150days,
    _180days: req.body._180days,
    StopDate: req.body.StopDate,
    StopBy: req.body.StopBy,
    PrintStatement: req.body.PrintStatement,
    OpenItemStateNum: req.body.OpenItemStateNum,
    LastBF: req.body.LastBF,
    PrefClerk: req.body.PrefClerk,
    PrefCommu: req.body.PrefCommu,
    MemCard: req.body.MemCard,
    PayAsYouGo: req.body.PayAsYouGo,
    SendSMSNotification: req.body.SendSMSNotification,
    DailyLimit: req.body.DailyLimit,
  };
  

  // Save Debtorimport in the database
  Debtorimport.create(debtorimport)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Debtorimport.",
      });
    });
};





// Retrieve all Debtorimport from the database.
exports.findAll = (req, res) => {
  // const DebtorCode = req.query.DebtorCode;
  // var condition = DebtorCode ? { DebtorCode: { [Op.like]: `%${DebtorCode}%` } } : null;

 
  Debtorimport.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Debtorimport.",
      });
    });
};

// Find a single Debtorimport with an DebtorCode
exports.findOne = (req, res) => {
  const DebtorCode = req.params.DebtorCode;

  Debtorimport.findByPk(DebtorCode)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Debtorimport with DebtorCode=${DebtorCode}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Debtorimport with DebtorCode=" + DebtorCode,
      });
    });
};

// Update a Debtorimport by the DebtorCode in the request
exports.update = (req, res) => {
  const DebtorCode = req.params.DebtorCode;

  Debtorimport.update(req.body, {
    where: { DebtorCode: DebtorCode },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Debtorimport was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Debtorimport with DebtorCode=${DebtorCode}. Maybe Debtorimport was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Debtorimport with DebtorCode=" + DebtorCode,
      });
    });
};

// Delete a Debtorimport with the specified DebtorCode in the request
exports.delete = (req, res) => {
  const DebtorCode = req.params.DebtorCode;

  Debtorimport.destroy({
    where: { DebtorCode: DebtorCode },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Debtorimport was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Debtorimport with DebtorCode=${DebtorCode}. Maybe Debtorimport was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Debtorimport with DebtorCode=" + DebtorCode,
      });
    });
};

// Delete all Debtorimport from the database.
exports.deleteAll = (req, res) => {
  Debtorimport.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Debtorimport were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Debtorimport.",
      });
    });
};

// Find all published Debtorimport
exports.findAllPublished = (req, res) => {
  Debtorimport.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Debtorimport.",
      });
    });
};
