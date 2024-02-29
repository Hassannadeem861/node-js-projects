const Tbldebtor_groups = require("../../models/Database_hostdebtors_model/tbldebtor_groups.model");


// Create and Save a new Tbldebtor_groups
exports.create = (req, res) => {
  // Validate request
  if (!req.body.GroupName) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a Tbldebtor_groups
  const tbldebtor_groups = {
    GroupName: req.body.Name,
  };

  // Save Tbldebtor_groups in the database
  Tbldebtor_groups.create(tbldebtor_groups)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldebtor_groups.",
      });
    });
};

// Retrieve all Tbldebtor_groups from the database.
exports.findAll = (req, res) => {
  Tbldebtor_groups.findAll()
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

// Find a single Tbldebtor_groups with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldebtor_groups.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Tbldebtor_groups with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Tbldebtor_groups with id=" + id });
    });
};

// Update a Tbldebtor_groups by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldebtor_groups.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldebtor_groups was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tbldebtor_groups with id=${id}. Maybe Tbldebtor_groups was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Tbldebtor_groups with id=" + id });
    });
};

// Delete a Tbldebtor_groups with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldebtor_groups.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Tbldebtor_groups was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tbldebtor_groups with id=${id}. Maybe Tbldebtor_groups was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Tbldebtor_groups with id=" + id });
    });
};

// Delete all Tbldebtor_groupss from the database.
exports.deleteAll = (req, res) => {
  Tbldebtor_groups.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldebtor_groupss were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listauditclaims.",
      });
    });
};
