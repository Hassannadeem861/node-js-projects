const Listauditorder = require("../../models/Database_hosthistory_model/tbllistauditorder.model");


// Create and Save a new Listauditorder
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Listauditorder
  const listauditorder = {
    Name: req.body.Name,
  };

  // Save Listauditorder in the database
  Listauditorder.create(listauditorder)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listauditorder.",
      });
    });
};

// Retrieve all Listauditorders from the database.
exports.findAll = (req, res) => {
  Listauditorder.findAll()
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

// Find a single Listauditorder with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listauditorder.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Listauditorder with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Listauditorder with id=" + id });
    });
};

// Update a Listauditorder by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listauditorder.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditorder was updated successfully." });
      } else {
        res.send({ message: `Cannot update Listauditorder with id=${id}. Maybe Listauditorder was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Listauditorder with id=" + id });
    });
};

// Delete a Listauditorder with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listauditorder.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Listauditorder was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Listauditorder with id=${id}. Maybe Listauditorder was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Listauditorder with id=" + id });
    });
};

// Delete all Listauditorders from the database.
exports.deleteAll = (req, res) => {
  Listauditorder.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Listauditorders were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
