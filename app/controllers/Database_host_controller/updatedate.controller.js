const Updatedate = require("../../models/Database_host_model/updatedate.model");


// Create and Save a new Updatedate
exports.create = (req, res) => {
  // Validate request
  if (!req.body.LastUpdate) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Updatedate
  const updatedate = {
    LastUpdate: req.body.LastUpdate,
   
  };

  // Save Updatedate in the database
  Updatedate.create(updatedate)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Updatedate.",
      });
    });
};

// Retrieve all Updatedates from the database.
exports.findAll = (req, res) => {
  const title = req.query.LastUpdate;
  var condition = title ? { LastUpdate: { [Op.like]: `%${LastUpdate}%` } } : null;

  Updatedate.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Updatedates.",
      });
    });
};

// Find a single Updatedate with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Updatedate.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Updatedate with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Updatedate with id=" + id,
      });
    });
};

// Update a Updatedate by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Updatedate.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Updatedate was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Updatedate with id=${id}. Maybe Updatedate was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Updatedate with id=" + id,
      });
    });
};

// Delete a Updatedate with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Updatedate.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Updatedate was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Updatedate with id=${id}. Maybe Updatedate was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Updatedate with id=" + id,
      });
    });
};

// Delete all Updatedates from the database.
exports.deleteAll = (req, res) => {
  Updatedate.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Updatedates were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Updatedates.",
      });
    });
};

// Find all published Updatedates
exports.findAllPublished = (req, res) => {
  Updatedate.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Updatedates.",
      });
    });
};
