const Tmpslavedelete = require("../../models/Database_host_model/tmpslavedelete.model");


// Create and Save a new Tmpslavedelete
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tmpslavedelete
  const tmpslavedelete = {
    StockCode: req.body.StockCode,
    StockBarcode: req.body.StockBarcode,
    Description1: req.body.Description1,
    Description2: req.body.Description2,
    MajorNo: req.body.MajorNo,
    Sub1No: req.body.Sub1No,
    Sub2No: req.body.Sub2No,
    StockOnHand: req.body.StockOnHand,
  
   
  };

  // Save Tmpslavedelete in the database
  Tmpslavedelete.create(tmpslavedelete)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmpslavedelete.",
      });
    });
};

// Retrieve all Tmpslavedeletes from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tmpslavedelete.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpslavedeletes.",
      });
    });
};

// Find a single Tmpslavedelete with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmpslavedelete.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tmpslavedelete with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tmpslavedelete with id=" + id,
      });
    });
};

// Update a Tmpslavedelete by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmpslavedelete.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpslavedelete was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tmpslavedelete with id=${id}. Maybe Tmpslavedelete was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tmpslavedelete with id=" + id,
      });
    });
};

// Delete a Tmpslavedelete with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmpslavedelete.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpslavedelete was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tmpslavedelete with id=${id}. Maybe Tmpslavedelete was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tmpslavedelete with id=" + id,
      });
    });
};

// Delete all Tmpslavedeletes from the database.
exports.deleteAll = (req, res) => {
  Tmpslavedelete.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmpslavedeletes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tmpslavedeletes.",
      });
    });
};

// Find all published Tmpslavedeletes
exports.findAllPublished = (req, res) => {
  Tmpslavedelete.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpslavedeletes.",
      });
    });
};
