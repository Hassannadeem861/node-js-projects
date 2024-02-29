const Listauditsplittender = require("../../models/Database_hosthistory_model/tbllistauditsplittender.model");


// Create and Save a new Listauditsplittender
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditsplittender
  const listauditsplittender = {
    Name: req.body.Name,
  };

  // Save Listauditsplittender in the database
  Listauditsplittender.create(listauditsplittender)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditsplittender.",
      });
    });
};

// Retrieve all Listauditsplittenders from the database.
exports.findAll = (req, res) => {
  Listauditsplittender.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving listauditclaims.",
      });
    });
};

// Find a single Listauditsplittender with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditsplittender.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditsplittender with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditsplittender with id=" + id });
    });
};

// Update a Listauditsplittender by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditsplittender.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditsplittender was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditsplittender with id=${id}. Maybe Listauditsplittender was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditsplittender with id=" + id });
    });
};

// Delete a Listauditsplittender with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditsplittender.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditsplittender was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditsplittender with id=${id}. Maybe Listauditsplittender was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditsplittender with id=" + id });
    });
};

// Delete all Listauditsplittenders from the database.
exports.deleteAll = (req, res) => {
  Listauditsplittender.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditsplittenders were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
