const Tbllivecashier = require("../../models/Database_host_model/tbllivecashier.model");


// Create and Save a new Tbllivecashier
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Cashier) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbllivecashier
  const tbllivecashier = {
    Cashier: req.body.Cashier,
    CashierHour: req.body.CashierHour,
    SaleType: req.body.SaleType,
    Amount: req.body.Amount,
  };

  // Save Tbllivecashier in the database
  Tbllivecashier.create(tbllivecashier)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbllivecashier.",
      });
    });
};

// Retrieve all Tbllivecashiers from the database.
exports.findAll = (req, res) => {
  const title = req.query.Cashier;
  var condition = title ? { Cashier: { [Op.like]: `%${Cashier}%` } } : null;

  Tbllivecashier.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllivecashiers.",
      });
    });
};

// Find a single Tbllivecashier with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbllivecashier.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbllivecashier with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbllivecashier with id=" + id,
      });
    });
};

// Update a Tbllivecashier by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbllivecashier.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllivecashier was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbllivecashier with id=${id}. Maybe Tbllivecashier was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbllivecashier with id=" + id,
      });
    });
};

// Delete a Tbllivecashier with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbllivecashier.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllivecashier was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbllivecashier with id=${id}. Maybe Tbllivecashier was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbllivecashier with id=" + id,
      });
    });
};

// Delete all Tbllivecashiers from the database.
exports.deleteAll = (req, res) => {
  Tbllivecashier.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbllivecashiers were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbllivecashiers.",
      });
    });
};

// Find all published Tbllivecashiers
exports.findAllPublished = (req, res) => {
  Tbllivecashier.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllivecashiers.",
      });
    });
};
