const Listauditstockvalue = require("../../models/Database_hosthistory_model/tbllistauditstockvalue.model");


// Create and Save a new Listauditstockvalue
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditstockvalue
  const listauditstockvalue = {
    Name: req.body.Name,
  };

  // Save Listauditstockvalue in the database
  Listauditstockvalue.create(listauditstockvalue)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditstockvalue.",
      });
    });
};

// Retrieve all Listauditstockvalues from the database.
exports.findAll = (req, res) => {
  Listauditstockvalue.findAll()
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

// Find a single Listauditstockvalue with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditstockvalue.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditstockvalue with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditstockvalue with id=" + id });
    });
};

// Update a Listauditstockvalue by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditstockvalue.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditstockvalue was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditstockvalue with id=${id}. Maybe Listauditstockvalue was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditstockvalue with id=" + id });
    });
};

// Delete a Listauditstockvalue with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditstockvalue.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditstockvalue was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditstockvalue with id=${id}. Maybe Listauditstockvalue was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditstockvalue with id=" + id });
    });
};

// Delete all Listauditstockvalues from the database.
exports.deleteAll = (req, res) => {
  Listauditstockvalue.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditstockvalues were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
