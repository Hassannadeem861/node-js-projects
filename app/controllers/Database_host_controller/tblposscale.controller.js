const Tblposscale = require("../../models/Database_host_model/tblposscale.model");


// Create and Save a new Tblposscale
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ScaleType) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblposscale
  const tblposscale = {
    ScaleType: req.body.ScaleType,
    ComPort: req.body.ComPort,
    BaudRate: req.body.BaudRate ,
    Parity: req.body.Parity,
    DataBit: req.body.DataBit,
    StopBit: req.body.StopBit ,
  };

  // Save Tblposscale in the database
  Tblposscale.create( tblposscale)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblposscale.",
      });
    });
};

// Retrieve all Tblposscales from the database.
exports.findAll = (req, res) => {
  const title = req.query.ScaleType;
  var condition = title ? { ScaleType: { [Op.like]: `%${ScaleType}%` } } : null;

  Tblposscale.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblposscales.",
      });
    });
};

// Find a single Tblposscale with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblposscale.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblposscale with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblposscale with id=" + id,
      });
    });
};

// Update a Tblposscale by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblposscale.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblposscale was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblposscale with id=${id}. Maybe Tblposscale was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblposscale with id=" + id,
      });
    });
};

// Delete a Tblposscale with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblposscale.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblposscale was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblposscale with id=${id}. Maybe Tblposscale was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblposscale with id=" + id,
      });
    });
};

// Delete all Tblposscales from the database.
exports.deleteAll = (req, res) => {
  Tblposscale.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblposscales were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblposscales.",
      });
    });
};

// Find all published Tblposscales
exports.findAllPublished = (req, res) => {
  Tblposscale.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblposscales.",
      });
    });
};
