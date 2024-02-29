const Listcredage = require("../../models/Database_hosthistory_model/tbllistcredage.model");


// Create and Save a new Listcredage
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listcredage
  const listcredage = {
    Name: req.body.Name,
  };

  // Save Listcredage in the database
  Listcredage.create(listcredage)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listcredage.",
      });
    });
};

// Retrieve all Listcredages from the database.
exports.findAll = (req, res) => {
  Listcredage.findAll()
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

// Find a single Listcredage with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listcredage.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listcredage with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listcredage with id=" + id });
    });
};

// Update a Listcredage by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listcredage.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listcredage was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listcredage with id=${id}. Maybe Listcredage was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listcredage with id=" + id });
    });
};

// Delete a Listcredage with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listcredage.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listcredage was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listcredage with id=${id}. Maybe Listcredage was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listcredage with id=" + id });
    });
};

// Delete all Listcredages from the database.
exports.deleteAll = (req, res) => {
  Listcredage.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listcredages were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
