const Tbllivecashierturnover = require("../../models/Database_host_model/tblmainpickingslip.model");


// Create and Save a new Tbllivecashierturnover
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Cashier) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbllivecashierturnover
  const tbllivecashierturnover = {
    Cashier: req.body.Cashier,
    SaleType: req.body.SaleType,
    Amount: req.body.Amount,
  };

  // Save Tbllivecashierturnover in the database
  Tbllivecashierturnover.create(tbllivecashierturnover)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbllivecashierturnover.",
      });
    });
};

// Retrieve all Tbllivecashierturnovers from the database.
exports.findAll = (req, res) => {
  const title = req.query.Cashier;
  var condition = title ? { Cashier: { [Op.like]: `%${Cashier}%` } } : null;

  Tbllivecashierturnover.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllivecashierturnovers.",
      });
    });
};

// Find a single Tbllivecashierturnover with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbllivecashierturnover.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbllivecashierturnover with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbllivecashierturnover with id=" + id,
      });
    });
};

// Update a Tbllivecashierturnover by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbllivecashierturnover.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllivecashierturnover was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbllivecashierturnover with id=${id}. Maybe Tbllivecashierturnover was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbllivecashierturnover with id=" + id,
      });
    });
};

// Delete a Tbllivecashierturnover with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbllivecashierturnover.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllivecashierturnover was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbllivecashierturnover with id=${id}. Maybe Tbllivecashierturnover was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbllivecashierturnover with id=" + id,
      });
    });
};

// Delete all Tbllivecashierturnovers from the database.
exports.deleteAll = (req, res) => {
  Tbllivecashierturnover.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbllivecashierturnovers were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbllivecashierturnovers.",
      });
    });
};

// Find all published Tbllivecashierturnovers
exports.findAllPublished = (req, res) => {
  Tbllivecashierturnover.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllivecashierturnovers.",
      });
    });
};
