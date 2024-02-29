const Listauditstockrecord = require("../../models/Database_hosthistory_model/tbllistauditstockrecord.model");


// Create and Save a new Listauditstockrecord
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditstockrecord
  const listauditstockrecord = {
    Name: req.body.Name,
  };

  // Save Listauditstockrecord in the database
  Listauditstockrecord.create(listauditstockrecord)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditstockrecord.",
      });
    });
};

// Retrieve all Listauditstockrecords from the database.
exports.findAll = (req, res) => {
  Listauditstockrecord.findAll()
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

// Find a single Listauditstockrecord with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditstockrecord.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditstockrecord with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditstockrecord with id=" + id });
    });
};

// Update a Listauditstockrecord by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditstockrecord.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditstockrecord was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditstockrecord with id=${id}. Maybe Listauditstockrecord was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditstockrecord with id=" + id });
    });
};

// Delete a Listauditstockrecord with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditstockrecord.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditstockrecord was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditstockrecord with id=${id}. Maybe Listauditstockrecord was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditstockrecord with id=" + id });
    });
};

// Delete all Listauditstockrecords from the database.
exports.deleteAll = (req, res) => {
  Listauditstockrecord.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditstockrecords were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
