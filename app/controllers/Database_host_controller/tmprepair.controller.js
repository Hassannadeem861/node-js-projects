const Tmprepair = require("../../models/Database_host_model/tmprepair.model");


// Create and Save a new Tmprepair
exports.create = (req, res) => {
  // Validate request
  if (!req.body.RepairFault) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tmprepair
  const tmprepair = {
    RepairFault: req.body.RepairFault,
  
   
  };

  // Save Tmprepair in the database
  Tmprepair.create(tmprepair)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmprepair.",
      });
    });
};

// Retrieve all Tmprepairs from the database.
exports.findAll = (req, res) => {
  const title = req.query.RepairFault;
  var condition = title ? { RepairFault: { [Op.like]: `%${RepairFault}%` } } : null;

  Tmprepair.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmprepairs.",
      });
    });
};

// Find a single Tmprepair with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmprepair.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tmprepair with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tmprepair with id=" + id,
      });
    });
};

// Update a Tmprepair by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmprepair.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmprepair was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tmprepair with id=${id}. Maybe Tmprepair was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tmprepair with id=" + id,
      });
    });
};

// Delete a Tmprepair with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmprepair.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmprepair was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tmprepair with id=${id}. Maybe Tmprepair was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tmprepair with id=" + id,
      });
    });
};

// Delete all Tmprepairs from the database.
exports.deleteAll = (req, res) => {
  Tmprepair.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmprepairs were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tmprepairs.",
      });
    });
};

// Find all published Tmprepairs
exports.findAllPublished = (req, res) => {
  Tmprepair.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmprepairs.",
      });
    });
};
