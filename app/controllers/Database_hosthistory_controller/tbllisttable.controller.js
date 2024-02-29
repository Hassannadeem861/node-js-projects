const Tbllisttable = require("../../models/Database_hosthistory_model/tbllisttable.model");


// Create and Save a new Tbllisttable
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbllisttable
  const tbllisttable = {
    Name: req.body.Name,
   
  };

  // Save Tbllisttable in the database
  Tbllisttable.create(tbllisttable)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbllisttable.",
      });
    });
};

// Retrieve all Tbllisttable from the database.
exports.findAll = (req, res) => {
  const title = req.query.Name;
  var condition = title ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Tbllisttable.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllisttable.",
      });
    });
};

// Find a single Tbllisttable with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbllisttable.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbllisttable with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbllisttable with id=" + id,
      });
    });
};

// Update a Tbllisttable by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbllisttable.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllisttable was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbllisttable with id=${id}. Maybe Tbllisttable was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbllisttable with id=" + id,
      });
    });
};

// Delete a Tbllisttable with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbllisttable.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllisttable was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbllisttable with id=${id}. Maybe Tbllisttable was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbllisttable with id=" + id,
      });
    });
};

// Delete all Tbllisttable from the database.
exports.deleteAll = (req, res) => {
    Tbllisttable.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbllisttable were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbllisttable.",
      });
    });
};

// Find all published Tbllisttable
exports.findAllPublished = (req, res) => {
    Tbllisttable.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllisttable.",
      });
    });
};
