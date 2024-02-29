const Tbldatagrv = require("../../models/Database_hosthistory_model/tbldatagrv.model");


// Create and Save a new Tbldatagrv
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldatagrv
  const tbldatagrv = {
    Name: req.body.Name,
   
  };

  // Save Tbldatagrv in the database
  Tbldatagrv.create(tbldatagrv)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatagrv.",
      });
    });
};

// Retrieve all Tbldatagrv from the database.
exports.findAll = (req, res) => {
  const title = req.query.Name;
  var condition = title ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Tbldatagrv.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatagrv.",
      });
    });
};

// Find a single Tbldatagrv with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatagrv.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldatagrv with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldatagrv with id=" + id,
      });
    });
};

// Update a Tbldatagrv by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatagrv.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatagrv was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldatagrv with id=${id}. Maybe Tbldatagrv was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldatagrv with id=" + id,
      });
    });
};

// Delete a Tbldatagrv with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatagrv.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatagrv was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldatagrv with id=${id}. Maybe Tbldatagrv was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldatagrv with id=" + id,
      });
    });
};

// Delete all Tbldatagrv from the database.
exports.deleteAll = (req, res) => {
    Tbldatagrv.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatagrv were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldatagrv.",
      });
    });
};

// Find all published Tbldatagrv
exports.findAllPublished = (req, res) => {
    Tbldatagrv.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatagrv.",
      });
    });
};
