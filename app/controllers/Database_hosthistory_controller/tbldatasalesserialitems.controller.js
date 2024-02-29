const Tbldatasalesserialitems = require("../../models/Database_hosthistory_model/tbldatasalesserialitems.model");


// Create and Save a new Tbldatasalesserialitems
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldatasalesserialitems
  const tbldatasalesserialitems = {
    Name: req.body.Name,
   
  };

  // Save Tbldatasalesserialitems in the database
  Tbldatasalesserialitems.create(tbldatasalesserialitems)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatasalesserialitems.",
      });
    });
};

// Retrieve all Tbldatasalesserialitems from the database.
exports.findAll = (req, res) => {
  const title = req.query.Name;
  var condition = title ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Tbldatasalesserialitems.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatasalesserialitems.",
      });
    });
};

// Find a single Tbldatagrv with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatasalesserialitems.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldatasalesserialitems with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldatasalesserialitems with id=" + id,
      });
    });
};

// Update a Tbldatasalesserialitems by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatasalesserialitems.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatasalesserialitems was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldatasalesserialitems with id=${id}. Maybe Tbldatasalesserialitems was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldatasalesserialitems with id=" + id,
      });
    });
};

// Delete a Tbldatasalesserialitems with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatasalesserialitems.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatasalesserialitems was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldatasalesserialitems with id=${id}. Maybe Tbldatasalesserialitems was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldatasalesserialitems with id=" + id,
      });
    });
};

// Delete all Tbldatasalesserialitems from the database.
exports.deleteAll = (req, res) => {
    Tbldatasalesserialitems.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatasalesserialitems were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldatasalesserialitems.",
      });
    });
};

// Find all published Tbldatasalesserialitems
exports.findAllPublished = (req, res) => {
    Tbldatasalesserialitems.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatasalesserialitems.",
      });
    });
};
