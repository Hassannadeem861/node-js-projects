const Listauditclaim = require("../../models/Database_hosthistory_model/tbllistauditclaim.model");

// Create and Save a new Listauditclaim
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditclaim
  const listauditclaims = {
    Name: req.body.Name,
  };

  // Save Listauditclaim in the database
  Listauditclaim.create(listauditclaims)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditclaim.",
      });
    });
};

// Retrieve all Listauditclaims from the database.
exports.findAll = (req, res) => {
  Listauditclaim.findAll()
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

// Find a single Listauditclaim with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditclaim.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditclaim with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditclaim with id=" + id });
    });
};

// Update a Listauditclaim by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditclaim.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditclaim was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditclaim with id=${id}. Maybe Listauditclaim was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditclaim with id=" + id });
    });
};

// Delete a Listauditclaim with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditclaim.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditclaim was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditclaim with id=${id}. Maybe Listauditclaim was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditclaim with id=" + id });
    });
};

// Delete all Listauditclaims from the database.
exports.deleteAll = (req, res) => {
  Listauditclaim.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditclaims were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
