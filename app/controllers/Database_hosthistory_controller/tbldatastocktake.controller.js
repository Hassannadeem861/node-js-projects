const Tbldatastocktake = require("../../models/Database_hosthistory_model/tbldatastocktake.model");


// Create and Save a new Tbldatastocktake
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldatastocktake
  const tbldatastocktake = {
    Name: req.body.Name,
   
  };

  // Save Tbldatastocktake in the database
  Tbldatastocktake.create(tbldatastocktake)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatastocktake.",
      });
    });
};

// Retrieve all Tbldatastocktake from the database.
exports.findAll = (req, res) => {
  const title = req.query.Name;
  var condition = title ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Tbldatastocktake.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatastocktake.",
      });
    });
};

// Find a single Tbldatastocktake with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatastocktake.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldatastocktake with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldatastocktake with id=" + id,
      });
    });
};

// Update a Tbldatastocktake by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatastocktake.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatastocktake was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldatastocktake with id=${id}. Maybe Tbldatastocktake was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldatastocktake with id=" + id,
      });
    });
};

// Delete a Tbldatastocktake with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatastocktake.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatastocktake was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldatastocktake with id=${id}. Maybe Tbldatastocktake was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldatastocktake with id=" + id,
      });
    });
};

// Delete all Tbldatastocktake from the database.
exports.deleteAll = (req, res) => {
    Tbldatastocktake.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatastocktake were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldatastocktake.",
      });
    });
};

// Find all published Tbldatastocktake
exports.findAllPublished = (req, res) => {
    Tbldatastocktake.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatastocktake.",
      });
    });
};
