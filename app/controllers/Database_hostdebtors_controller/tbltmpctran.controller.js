const Tbltmpctran = require("../../models/Database_hostdebtors_model/tbltmpctran.model");


// Create and Save a new Tbltmpctran
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Date) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbltmpctran
  const tbltmpctrans = {
    Date: req.body.Date,
    DebtorCode: req.body.DebtorCode,
    Reference: req.body.Reference ,
    OrderNo: req.body.OrderNo ,
    Description: req.body.Description ,
    DebitAmount: req.body.DebitAmount, 
    CreditAmount: req.body.CreditAmount,
    BalanceAmount: req.body.BalanceAmount ,
    TransType: req.body.TransType ,


  };

  // Save Tbltmpctran in the database
  Tbltmpctran.create(tbltmpctrans)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbltmpctran.",
      });
    });
};

// Retrieve all Tbltmpctran from the database.
exports.findAll = (req, res) => {
  const Date = req.query.Date;
  var condition = Date ? { Date: { [Op.like]: `%${Date}%` } } : null;

  Tbltmpctran.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbltmpctran.",
      });
    });
};

// Find a single Tbltmpctran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbltmpctran.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbltmpctran with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbltmpctran with id=" + id,
      });
    });
};

// Update a Tbltmpctran by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbltmpctran.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbltmpctran was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbltmpctran with id=${id}. Maybe Tbltmpctran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbltmpctran with id=" + id,
      });
    });
};

// Delete a Tbltmpctran with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbltmpctran.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbltmpctran was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbltmpctran with id=${id}. Maybe Tbltmpctran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbltmpctran with id=" + id,
      });
    });
};

// Delete all Tbltmpctran from the database.
exports.deleteAll = (req, res) => {
  Tbltmpctran.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbltmpctran were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbltmpctran.",
      });
    });
};

// Find all published Tbltmpctran
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbltmpctran.",
      });
    });
};
