const Tbldebtor_tran_cloud = require("../../models/Database_hostdebtors_model/tbl_debtors_tran.model");


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.DebtorCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const tbl_debtor_tran = {
    DateTime: req.body.DateTime,
    DebtorCode: req.body.DebtorCode,
    Reference: req.body.Reference,
    Description: req.body.Description,
    TransType: req.body.TransType,
    Amount: req.body.Amount ? req.body.Amount : 0,
    OrderNo: req.body.OrderNo,
    hisYear: req.body.hisYear,
    hisMonth: req.body.hisMonth,
    hisDay: req.body.hisDay,
    DayEndFinalize: req.body.DayEndFinalize,
    AccountSystem: req.body.AccountSystem,
    Vat: req.body.Vat,
    BFDate: req.body.BFDate,
    UserName: req.body.UserName,
    DebtorName: req.body.DebtorName
  };


  // Save Tutorial in the database
  Tbldebtor_tran_cloud.create(tbl_debtor_tran)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tbl_debtor_tran.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const DebtorCode = req.query.title;
  var condition = DebtorCode ? { DebtorCode: { [Op.like]: `%${DebtorCode}%` } } : null;

  Tbldebtor_tran_cloud.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbl_debtor_tran.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldebtor_tran_cloud.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find tbl_debtor_tran with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldebtor_tran_cloud.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "tbl_debtor_tran was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update tbl_debtor_tran with id=${id}. Maybe tbl_debtor_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating tbl_debtor_tran with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldebtor_tran_cloud.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "tbl_debtor_tran was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe tbl_debtor_tran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete tbl_debtor_tran with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tbldebtor_tran_cloud.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} tbl_debtor_tran were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tbl_debtor_tran.",
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tbldebtor_tran_cloud.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbl_debtor_tran.",
      });
    });
};
