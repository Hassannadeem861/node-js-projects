const Listcashupdeclare = require("../../models/Database_hosthistory_model/tbllistcashupdeclare.model");

// Create and Save a new Listcashupdeclare
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listcashupdeclare
  const listcashupdeclare = {
    Name: req.body.Name,
  };

  // Save Listcashupdeclare in the database
  Listcashupdeclare.create(listcashupdeclare)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listcashupdeclare.",
      });
    });
};

// Retrieve all Listcashupdeclares from the database.
exports.findAll = (req, res) => {
  Listcashupdeclare.findAll()
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

// Find a single Listcashupdeclare with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listcashupdeclare.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listcashupdeclare with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listcashupdeclare with id=" + id });
    });
};

// Update a Listcashupdeclare by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listcashupdeclare.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listcashupdeclare was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listcashupdeclare with id=${id}. Maybe Listcashupdeclare was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listcashupdeclare with id=" + id });
    });
};

// Delete a Listcashupdeclare with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listcashupdeclare.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listcashupdeclare was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listcashupdeclare with id=${id}. Maybe Listcashupdeclare was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listcashupdeclare with id=" + id });
    });
};

// Delete all Listcashupdeclares from the database.
exports.deleteAll = (req, res) => {
  Listcashupdeclare.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listcashupdeclares were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
