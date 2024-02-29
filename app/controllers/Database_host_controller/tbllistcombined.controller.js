const Tbllistcombined = require("../../models/Database_host_model/tbllistcombined.model");


// Create and Save a new Tbllistcombined
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbllistcombined
  const tbllistcombined = {
    StockCode: req.body.StockCode,
    Description: req.body.Description,
    Combined: req.body.Combined ,
  };

  // Save Tbllistcombined in the database
  Tbllistcombined.create(tbllistcombined)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbllistcombined.",
      });
    });
};

// Retrieve all Tbllistcombined from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tbllistcombined.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllistcombined.",
      });
    });
};

// Find a single Tbllistcombined with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbllistcombined.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbllistcombined with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbllistcombined with id=" + id,
      });
    });
};

// Update a Tbllistcombined by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbllistcombined.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllistcombined was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbllistcombined with id=${id}. Maybe Tbllistcombined was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbllistcombined with id=" + id,
      });
    });
};

// Delete a Tbllistcombined with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbllistcombined.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllistcombined was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbllistcombined with id=${id}. Maybe Tbllistcombined was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbllistcombined with id=" + id,
      });
    });
};

// Delete all Tbllistcombined from the database.
exports.deleteAll = (req, res) => {
    Tbllistcombined.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbllistcombined were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbllistcombined.",
      });
    });
};

// Find all published Tbllistcombined
exports.findAllPublished = (req, res) => {
    Tbllistcombined.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllistcombined.",
      });
    });
};
