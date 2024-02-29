const Tbladdress = require("../../models/Database_host_model/tbladdress.model");


// Create and Save a new Tbladdress
exports.create = (req, res) => {
  // Validate request
  if (!req.body.laddress) {
    res.status(400).send({ message: "laddress can not be empty!" });
    return;
  }

  // Create a Tbladdress
  const tbladdress = {
    laddress: req.body.laddress,
  };

  // Save Tbladdress in the database
  Tbladdress.create(tbladdress)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbladdress.",
      });
    });
};

// Retrieve all Tbladdresss from the database.
exports.findAll = (req, res) => {
  Tbladdress.findAll()
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

// Find a single Tbladdress with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbladdress.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Tbladdress with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tbladdress with id=" + id });
    });
};

// Update a Tbladdress by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbladdress.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbladdress was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tbladdress with id=${id}. Maybe Tbladdress was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tbladdress with id=" + id });
    });
};

// Delete a Tbladdress with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbladdress.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbladdress was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tbladdress with id=${id}. Maybe Tbladdress was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tbladdress with id=" + id });
    });
};

// Delete all Tbladdresss from the database.
exports.deleteAll = (req, res) => {
  Tbladdress.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbladdresss were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
