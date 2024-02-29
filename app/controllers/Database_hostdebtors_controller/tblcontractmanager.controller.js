const TblContractManager = require("../../models/Database_hostdebtors_model/tblcontractmanager.model");

// Create and Save a new TblContractManager
exports.create = (req, res) => {
  

  // Create a TblContractManager
  const tblcontractmanager = {
      Datetime: req.body.Datetime,
      ContractNo: req.body.ContractNo,
      DebtorCode: req.body.DebtorCode,
      DebtorName: req.body.DebtorName,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
      ContractActive: req.body.ContractActive,
      GroupID: req.body.GroupID,
      HisDay: req.body.HisDay,
      HisMonth: req.body.HisMonth,
      HisYear: req.body.HisYear,
      Blank1: req.body.Blank1,
      Blank2: req.body.Blank2,
      Blank3: req.body.Blank3,
      UserName: req.body.UserName
   
    
  };

  // Save TblContractManager in the database
  TblContractManager.create(tblcontractmanager)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TblContractManager.",
      });
    });
};

// Retrieve all TblContractManagers from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  TblContractManager.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TblContractManagers.",
      });
    });
};

// Find a single TblContractManager with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  TblContractManager.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find TblContractManager with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving TblContractManager with id=" + id,
      });
    });
};

// Update a TblContractManager by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  TblContractManager.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "TblContractManager was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update TblContractManager with id=${id}. Maybe TblContractManager was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating TblContractManager with id=" + id,
      });
    });
};

// Delete a TblContractManager with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  TblContractManager.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "TblContractManager was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete TblContractManager with id=${id}. Maybe TblContractManager was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete TblContractManager with id=" + id,
      });
    });
};

// Delete all TblContractManagers from the database.
exports.deleteAll = (req, res) => {
  TblContractManager.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} TblContractManagers were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all TblContractManagers.",
      });
    });
};

// Find all published TblContractManagers
exports.findAllPublished = (req, res) => {
  TblContractManager.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TblContractManagers.",
      });
    });
};
