const Tblcashout = require("../../models/Database_host_model/tblcashout.model");

// Create and Save a new Tblcashout
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Amount) {
    res.status(400).send({ message: "Amount can not be empty!" });
    return;
  }

  // Create a Tblcashout
  const tblcashout = {
    Amount: req.body.Amount,
  };

  // Save Tblcashout in the database
  Tblcashout.create(tblcashout)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblcashout.",
      });
    });
};

// Retrieve all Tblcashouts from the database.
exports.findAll = (req, res) => {
  Tblcashout.findAll()
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

// Find a single Tblcashout with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblcashout.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Tblcashout with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tblcashout with id=" + id });
    });
};

// Update a Tblcashout by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblcashout.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tblcashout was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tblcashout with id=${id}. Maybe Tblcashout was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tblcashout with id=" + id });
    });
};

// Delete a Tblcashout with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblcashout.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tblcashout was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tblcashout with id=${id}. Maybe Tblcashout was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tblcashout with id=" + id });
    });
};

// Delete all Tblcashouts from the database.
exports.deleteAll = (req, res) => {
  Tblcashout.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblcashouts were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
