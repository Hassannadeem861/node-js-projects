const Listauditcreditortotals = require("../../models/Database_hosthistory_model/tbllistauditcreditortotals.model");


// Create and Save a new Listauditcreditortotals
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditcreditortotals
  const listauditcreditortotals = {
    Name: req.body.Name,
  };

  // Save Listauditcreditortotals in the database
  Listauditcreditortotals.create(listauditcreditortotals)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditcreditortotals.",
      });
    });
};

// Retrieve all Listauditcreditortotalss from the database.
exports.findAll = (req, res) => {
  Listauditcreditortotals.findAll()
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

// Find a single Listauditcreditortotals with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditcreditortotals.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditcreditortotals with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditcreditortotals with id=" + id });
    });
};

// Update a Listauditcreditortotals by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditcreditortotals.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditcreditortotals was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditcreditortotals with id=${id}. Maybe Listauditcreditortotals was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditcreditortotals with id=" + id });
    });
};

// Delete a Listauditcreditortotals with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditcreditortotals.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditcreditortotals was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditcreditortotals with id=${id}. Maybe Listauditcreditortotals was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditcreditortotals with id=" + id });
    });
};

// Delete all Listauditcreditortotalss from the database.
exports.deleteAll = (req, res) => {
  Listauditcreditortotals.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditcreditortotalss were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
