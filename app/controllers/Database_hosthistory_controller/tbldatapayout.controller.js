
const Tbldatapayout = require("../../models/Database_hosthistory_model/tbldatapayout.model");

// Create and Save a new Tbldatapayout
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldatapayout
  const tbldatapayout = {
    Name: req.body.Name,
  


  };

  // Save Tbldatapayout in the database
  Tbldatapayout.create(tbldatapayout)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldatapayout.",
      });
    });
};

// Retrieve all Tbldatapayout from the database.
exports.findAll = (req, res) => {
  const Date = req.query.Name;
  var condition = Date ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Tbldatapayout.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatapayout.",
      });
    });
};

// Find a single Tbldatapayout with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldatapayout.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldatapayout with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldatapayout with id=" + id,
      });
    });
};

// Update a Tbldatapayout by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldatapayout.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatapayout was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldatapayout with id=${id}. Maybe Tbldatapayout was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldatapayout with id=" + id,
      });
    });
};

// Delete a Tbldatapayout with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldatapayout.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldatapayout was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldatapayout with id=${id}. Maybe Tbldatapayout was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldatapayout with id=" + id,
      });
    });
};

// Delete all Tbldatapayout from the database.
exports.deleteAll = (req, res) => {
    Tbldatapayout.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldatapayout were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldatapayout.",
      });
    });
};

// Find all published Tbldatapayout
exports.findAllPublished = (req, res) => {
    Tbldatapayout.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldatapayout.",
      });
    });
};
