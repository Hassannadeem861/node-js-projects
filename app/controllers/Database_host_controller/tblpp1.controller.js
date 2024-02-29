const Tblpp1 = require("../../models/Database_host_model/tblpp1.model");


// Create and Save a new Tblpp1
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblpp1
  const tblpp1= {
   
  
    StockCode: req.body.StockCode ,
    Description: req.body.Description,
    Qty: req.body.Qty,
    ACost: req.body.ACost ,
    Aselling: req.body.Aselling,
    
    AGPV: req.body.AGPV ,
    AGPP: req.body.AGPP ,
  };

  // Save Tblpp1 in the database
  Tblpp1.create( tblpp1)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblpp1.",
      });
    });
};

// Retrieve all Tblpp1s from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tblpp1.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblpp1s.",
      });
    });
};

// Find a single Tblpp1 with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblpp1.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblpp1 with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblpp1 with id=" + id,
      });
    });
};

// Update a Tblpp1 by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblpp1.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblpp1 was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblpp1 with id=${id}. Maybe Tblpp1 was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblpp1 with id=" + id,
      });
    });
};

// Delete a Tblpp1 with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblpp1.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblpp1 was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblpp1 with id=${id}. Maybe Tblpp1 was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblpp1 with id=" + id,
      });
    });
};

// Delete all Tblpp1s from the database.
exports.deleteAll = (req, res) => {
  Tblpp1.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblpp1s were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblpp1s.",
      });
    });
};

// Find all published Tblpp1s
exports.findAllPublished = (req, res) => {
  Tblpp1.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblpp1s.",
      });
    });
};
