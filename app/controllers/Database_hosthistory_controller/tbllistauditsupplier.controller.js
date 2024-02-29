const Listauditsupplier = require("../../models/Database_hosthistory_model/tbllistauditsupplier.model");

// Create and Save a new Listauditsupplier
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditsupplier
  const listauditsupplier = {
    Name: req.body.Name,
  };

  // Save Listauditsupplier in the database
  Listauditsupplier.create(listauditsupplier)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditsupplier.",
      });
    });
};

// Retrieve all Listauditsuppliers from the database.
exports.findAll = (req, res) => {
  Listauditsupplier.findAll()
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

// Find a single Listauditsupplier with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditsupplier.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditsupplier with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditsupplier with id=" + id });
    });
};

// Update a Listauditsupplier by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditsupplier.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditsupplier was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditsupplier with id=${id}. Maybe Listauditsupplier was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditsupplier with id=" + id });
    });
};

// Delete a Listauditsupplier with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditsupplier.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditsupplier was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditsupplier with id=${id}. Maybe Listauditsupplier was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditsupplier with id=" + id });
    });
};

// Delete all Listauditsuppliers from the database.
exports.deleteAll = (req, res) => {
  Listauditsupplier.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditsuppliers were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
