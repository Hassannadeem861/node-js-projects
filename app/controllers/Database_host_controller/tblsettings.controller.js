const Tblsettings = require("../../models/Database_host_model/tblsettings.model");

// Create and Save a new Tblsettings
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Sno) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblsettings
  const tblsettings = {
    Sno: req.body.Sno,
    FooterMsg: req.body.FooterMsg,
   
  };

  // Save Tblsettings in the database
  Tblsettings.create(tblsettings)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblsettings.",
      });
    });
};

// Retrieve all Tblsettingss from the database.
exports.findAll = (req, res) => {
  const title = req.query.Sno;
  var condition = title ? { Sno: { [Op.like]: `%${Sno}%` } } : null;

  Tblsettings.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblsettingss.",
      });
    });
};

// Find a single Tblsettings with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblsettings.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblsettings with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblsettings with id=" + id,
      });
    });
};

// Update a Tblsettings by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblsettings.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblsettings was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblsettings with id=${id}. Maybe Tblsettings was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblsettings with id=" + id,
      });
    });
};

// Delete a Tblsettings with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblsettings.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblsettings was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblsettings with id=${id}. Maybe Tblsettings was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblsettings with id=" + id,
      });
    });
};

// Delete all Tblsettingss from the database.
exports.deleteAll = (req, res) => {
  Tblsettings.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblsettingss were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblsettingss.",
      });
    });
};

// Find all published Tblsettingss
exports.findAllPublished = (req, res) => {
  Tblsettings.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblsettingss.",
      });
    });
};
