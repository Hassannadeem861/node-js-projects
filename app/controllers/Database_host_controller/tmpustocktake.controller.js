const Tmpustocktake = require("../../models/Database_host_model/tmpustocktake.model");


// Create and Save a new Tmpustocktake
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tmpustocktake
  const tmpustocktake = {
    StockCode: req.body.StockCode,
    S_No: req.body.S_No,
    Description: req.body.Description,
    SOH: req.body.SOH,
    StockCount: req.body.StockCount,
    
   
  };

  // Save Tmpustocktake in the database
  Tmpustocktake.create(tmpustocktake)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmpustocktake.",
      });
    });
};

// Retrieve all Tmpustocktakes from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tmpustocktake.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpustocktakes.",
      });
    });
};

// Find a single Tmpustocktake with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmpustocktake.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tmpustocktake with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tmpustocktake with id=" + id,
      });
    });
};

// Update a Tmpustocktake by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmpustocktake.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpustocktake was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tmpustocktake with id=${id}. Maybe Tmpustocktake was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tmpustocktake with id=" + id,
      });
    });
};

// Delete a Tmpustocktake with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmpustocktake.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpustocktake was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tmpustocktake with id=${id}. Maybe Tmpustocktake was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tmpustocktake with id=" + id,
      });
    });
};

// Delete all Tmpustocktakes from the database.
exports.deleteAll = (req, res) => {
  Tmpustocktake.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmpustocktakes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tmpustocktakes.",
      });
    });
};

// Find all published Tmpustocktakes
exports.findAllPublished = (req, res) => {
  Tmpustocktake.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpustocktakes.",
      });
    });
};
