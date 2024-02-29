const Tbldatacashup_det = require("../../models/Database_hosthistory_model/tbldatacashup_det.model");

// Create and Save a new Tbldatacashup_det
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Tbldatacashup_det
  const tbldatacashup_det = {
    Name: req.body.Name,
  };

  // Save Tbldatacashup_det in the database
  Tbldatacashup_det.create(tbldatacashup_det)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatacashup_det.",
      });
    });
};

// Retrieve all Tbldatacashup_dets from the database.
exports.findAll = (req, res) => {
  Tbldatacashup_det.findAll()
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

// Find a single Tbldatacashup_det with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatacashup_det.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Tbldatacashup_det with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tbldatacashup_det with id=" + id });
    });
};

// Update a Tbldatacashup_det by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatacashup_det.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatacashup_det was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tbldatacashup_det with id=${id}. Maybe Tbldatacashup_det was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tbldatacashup_det with id=" + id });
    });
};

// Delete a Tbldatacashup_det with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatacashup_det.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldatacashup_det was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tbldatacashup_det with id=${id}. Maybe Tbldatacashup_det was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tbldatacashup_det with id=" + id });
    });
};

// Delete all Tbldatacashup_dets from the database.
exports.deleteAll = (req, res) => {
  Tbldatacashup_det.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatacashup_dets were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
