const Tbllaybyefootermsg = require("../../models/Database_host_model/tbllaybyefootermsg.model");


// Create and Save a new Tbllaybyefootermsg
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Sno) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const tbllaybyefootermsg = {
    Sno: req.body.Sno,
    FooterMsg: req.body.FooterMsg,
   
  };

  // Save Tutorial in the database
  Tbllaybyefootermsg.create(tbllaybyefootermsg)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbllaybyefootermsg.",
      });
    });
};

// Retrieve all Tbllaybyefootermsg from the database.
exports.findAll = (req, res) => {
  const title = req.query.Sno;
  var condition = title ? { Sno: { [Op.like]: `%${Sno}%` } } : null;

  Tbllaybyefootermsg.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllaybyefootermsg.",
      });
    });
};

// Find a single Tbllaybyefootermsg with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbllaybyefootermsg.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbllaybyefootermsg with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbllaybyefootermsg with id=" + id,
      });
    });
};

// Update a Tbllaybyefootermsg by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbllaybyefootermsg.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllaybyefootermsg was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbllaybyefootermsg with id=${id}. Maybe Tbllaybyefootermsg was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbllaybyefootermsg with id=" + id,
      });
    });
};

// Delete a Tbllaybyefootermsg with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbllaybyefootermsg.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllaybyefootermsg was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbllaybyefootermsg with id=${id}. Maybe Tbllaybyefootermsg was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbllaybyefootermsg with id=" + id,
      });
    });
};

// Delete all Tbllaybyefootermsg from the database.
exports.deleteAll = (req, res) => {
    Tbllaybyefootermsg.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbllaybyefootermsg were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbllaybyefootermsg.",
      });
    });
};

// Find all published Tbllaybyefootermsg
exports.findAllPublished = (req, res) => {
    Tbllaybyefootermsg.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllaybyefootermsg.",
      });
    });
};
