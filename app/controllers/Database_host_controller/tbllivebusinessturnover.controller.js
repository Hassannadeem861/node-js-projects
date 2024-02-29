const Tbllivebusinessturnover = require("../../models/Database_host_model/tbllivebusinessturnover.model");


// Create and Save a new Tbllivebusinessturnover
exports.create = (req, res) => {
  // Validate request
  if (!req.body.SaleType) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbllivebusinessturnover
  const tbllivebusinessturnover = {
    SaleType: req.body.SaleType,
    Amount: req.body.Amount,
   
  };

  // Save Tbllivebusinessturnover in the database
  Tbllivebusinessturnover.create(tbllivebusinessturnover)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbllivebusinessturnover.",
      });
    });
};

// Retrieve all Tbllivebusinessturnovers from the database.
exports.findAll = (req, res) => {
  const title = req.query.SaleType;
  var condition = title ? { SaleType: { [Op.like]: `%${SaleType}%` } } : null;

  Tbllivebusinessturnover.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllivebusinessturnovers.",
      });
    });
};

// Find a single Tbllivebusinessturnover with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbllivebusinessturnover.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbllivebusinessturnover with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbllivebusinessturnover with id=" + id,
      });
    });
};

// Update a Tbllivebusinessturnover by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbllivebusinessturnover.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllivebusinessturnover was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbllivebusinessturnover with id=${id}. Maybe Tbllivebusinessturnover was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbllivebusinessturnover with id=" + id,
      });
    });
};

// Delete a Tbllivebusinessturnover with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbllivebusinessturnover.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllivebusinessturnover was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbllivebusinessturnover with id=${id}. Maybe Tbllivebusinessturnover was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbllivebusinessturnover with id=" + id,
      });
    });
};

// Delete all Tbllivebusinessturnovers from the database.
exports.deleteAll = (req, res) => {
  Tbllivebusinessturnover.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbllivebusinessturnovers were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbllivebusinessturnovers.",
      });
    });
};

// Find all published Tbllivebusinessturnovers
exports.findAllPublished = (req, res) => {
  Tbllivebusinessturnover.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllivebusinessturnovers.",
      });
    });
};
