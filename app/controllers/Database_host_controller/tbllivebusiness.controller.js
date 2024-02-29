const Tbllivebusiness = require("../../models/Database_host_model/tbllivebusiness.model");

// Create and Save a new Tbllivebusiness
exports.create = (req, res) => {
  // Validate request
  if (!req.body.BusinessHour) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbllivebusiness
  const tbllivebusiness = {
    BusinessHour: req.body.BusinessHour,
    SaleType: req.body.SaleType,
    Amount: req.body.Amount,
    TurnOverDay: req.body.TurnOverDay,
  };

  // Save Tbllivebusiness in the database
  Tbllivebusiness.create(tbllivebusiness)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbllivebusiness.",
      });
    });
};

// Retrieve all Tbllivebusinesss from the database.
exports.findAll = (req, res) => {
  const title = req.query.BusinessHour;
  var condition = title ? { BusinessHour: { [Op.like]: `%${BusinessHour}%` } } : null;

  Tbllivebusiness.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllivebusinesss.",
      });
    });
};

// Find a single Tbllivebusiness with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbllivebusiness.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbllivebusiness with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbllivebusiness with id=" + id,
      });
    });
};

// Update a Tbllivebusiness by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbllivebusiness.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllivebusiness was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbllivebusiness with id=${id}. Maybe Tbllivebusiness was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbllivebusiness with id=" + id,
      });
    });
};

// Delete a Tbllivebusiness with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbllivebusiness.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllivebusiness was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbllivebusiness with id=${id}. Maybe Tbllivebusiness was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbllivebusiness with id=" + id,
      });
    });
};

// Delete all Tbllivebusinesss from the database.
exports.deleteAll = (req, res) => {
  Tbllivebusiness.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbllivebusinesss were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbllivebusinesss.",
      });
    });
};

// Find all published Tbllivebusinesss
exports.findAllPublished = (req, res) => {
  Tbllivebusiness.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllivebusinesss.",
      });
    });
};
