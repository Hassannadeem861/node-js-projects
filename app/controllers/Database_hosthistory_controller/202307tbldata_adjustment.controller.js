const Tbldata_adjustment = require("../../models/Database_hosthistory_model/202307tbldata_adjustment.model");

// Create and Save a new Tbldata_adjustment
exports.create = (req, res) => {
  // Validate request
  if (!req.body.DateTime) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldata_adjustment
  const tbldata_adjustment = {
   
    DateTime: req.body.DateTime,
    StockCode: req.body.StockCode,
    Reference: req.body.Reference ,
    Description: req.body.Description,
    AdjustQuantity: req.body.AdjustQuantity,
    OldQuantity: req.body.OldQuantity ,
    NewQuantity: req.body.NewQuantity,
    Reason: req.body.Reason,
    User: req.body. User ,
    Print: req.body.Print,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth ,
    Hisday: req.body.Hisday,
   
  };

  // Save Tbldata_adjustment in the database
  Tbldata_adjustment.create(tbldata_adjustment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldata_adjustment.",
      });
    });
};

// Retrieve all Tbldata_adjustment from the database.
exports.findAll = (req, res) => {
  const title = req.query.DateTime;
  var condition = title ? { DateTime: { [Op.like]: `%${DateTime}%` } } : null;

  Tbldata_adjustment.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_adjustment.",
      });
    });
};

// Find a single Tbldata_adjustment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_adjustment.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldata_adjustment with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldata_adjustment with id=" + id,
      });
    });
};

// Update a TTbldata_adjustment by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_adjustment.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_adjustment was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldata_adjustment with id=${id}. Maybe Tbldata_adjustment was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldata_adjustment with id=" + id,
      });
    });
};

// Delete a Tbldata_adjustment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_adjustment.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_adjustment was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldata_adjustment with id=${id}. Maybe Tbldebtor_tran was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldata_adjustment with id=" + id,
      });
    });
};

// Delete all Tbldata_adjustment from the database.
exports.deleteAll = (req, res) => {
    Tbldata_adjustment.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldata_adjustment were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldata_adjustment.",
      });
    });
};

// Find all published Tbldata_adjustment
exports.findAllPublished = (req, res) => {
    Tbldata_adjustment.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_adjustment.",
      });
    });
};
