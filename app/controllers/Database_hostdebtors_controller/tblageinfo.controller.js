// const db = require("../models");
// const TblAgeInfo = db.tblAgeInfo;

// const Op = db.Sequelize.Op;


const TblAgeInfo = require("../../models/Database_hostdebtors_model/tblageinfo.model");

// Create and Save a new TblAgeInfo
exports.create = (req, res) => {
  // Validate request
 

  // Create a TblAgeInfo
  
    const tblAgeInfo = {
      Datetime: req.body.Datetime,
      // DebtorCode: req.body.DebtorCode,
      // Agingno: req.body.Agingno,
      // PreviousAgeDate: req.body.PreviousAgeDate,
      // CurrentAgeDate: req.body.CurrentAgeDate,
      // BalanceForward: req.body.BalanceForward,
      // CurrentBalance: req.body.CurrentBalance,
      // _30days: req.body._30days,
      // _60days: req.body._60days,
      // _90days: req.body._90days,
      // _120days: req.body._120days,
      // _150days: req.body._150days,
      // _180days: req.body._180days,
      // User: req.body.User,
      // Hisyear: req.body.Hisyear,
      // Hismonth: req.body.Hismonth,
      // Hisday: req.body.Hisday
    };
    

  // Save TblAgeInfo in the database
  TblAgeInfo.create(tblAgeInfo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TblAgeInfo.",
      });
    });
};

// Retrieve all TblAgeInfo from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  TblAgeInfo.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TblAgeInfo.",
      });
    });
};

// Find a single TblAgeInfo with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  TblAgeInfo.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find TblAgeInfo with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving TblAgeInfo with id=" + id,
      });
    });
};

// Update a TblAgeInfo by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  TblAgeInfo.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "TblAgeInfo was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update TblAgeInfo with id=${id}. Maybe TblAgeInfo was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating TblAgeInfo with id=" + id,
      });
    });
};

// Delete a TblAgeInfo with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  TblAgeInfo.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "TblAgeInfo was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete TblAgeInfo with id=${id}. Maybe TblAgeInfo was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete TblAgeInfo with id=" + id,
      });
    });
};

// Delete all TblAgeInfo from the database.
exports.deleteAll = (req, res) => {
  TblAgeInfo.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} TblAgeInfo were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all TblAgeInfo.",
      });
    });
};

// Find all published TblAgeInfo
exports.findAllPublished = (req, res) => {
  TblAgeInfo.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TblAgeInfo.",
      });
    });
};
