const Tbldatacashup = require("../../models/Database_hosthistory_model/tbldatacashup.model");


// Create and Save a new Tbldatacashup
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Tbldatacashup
  const tbldatacashup = {
    Name: req.body.Name,
  };

  // Save Tbldatacashup in the database
  Tbldatacashup.create(tbldatacashup)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatacashup.",
      });
    });
};

// Retrieve all Tbldatacashups from the database.
exports.findAll = (req, res) => {
  Tbldatacashup.findAll()
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

// Find a single Tbldatacashup with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatacashup.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Tbldatacashup with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tbldatacashup with id=" + id });
    });
};

// Update a Tbldatacashup by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatacashup.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatacashup was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tbldatacashup with id=${id}. Maybe Tbldatacashup was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tbldatacashup with id=" + id });
    });
};

// Delete a Tbldatacashup with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatacashup.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatacashup was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tbldatacashup with id=${id}. Maybe Tbldatacashup was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tbldatacashup with id=" + id });
    });
};

// Delete all Tbldatacashups from the database.
exports.deleteAll = (req, res) => {
  Tbldatacashup.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatacashups were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
