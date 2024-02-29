const Tmpstocktake = require("../../models/Database_host_model/tmpstocktake.model");


// Create and Save a new Tmpstocktake
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tmpstocktake
  const tmpstocktake = {
    StockCode: req.body.StockCode,
    S_No: req.body.S_No,
    Description: req.body.Description,
    SOH: req.body.SOH,
    StockCount: req.body.StockCount,
   
   
  };

  // Save Tmpstocktake in the database
  Tmpstocktake.create(tmpstocktake)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmpstocktake.",
      });
    });
};

// Retrieve all Tmpstocktakes from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tmpstocktake.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpstocktakes.",
      });
    });
};

// Find a single Tmpstocktake with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmpstocktake.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tmpstocktake with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tmpstocktake with id=" + id,
      });
    });
};

// Update a Tmpstocktake by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmpstocktake.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpstocktake was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tmpstocktake with id=${id}. Maybe Tmpstocktake was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tmpstocktake with id=" + id,
      });
    });
};

// Delete a Tmpstocktake with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmpstocktake.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpstocktake was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tmpstocktake with id=${id}. Maybe Tmpstocktake was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tmpstocktake with id=" + id,
      });
    });
};

// Delete all Tmpstocktakes from the database.
exports.deleteAll = (req, res) => {
  Tmpstocktake.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmpstocktakes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tmpstocktakes.",
      });
    });
};

// Find all published Tmpstocktakes
exports.findAllPublished = (req, res) => {
  Tmpstocktake.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpstocktakes.",
      });
    });
};
