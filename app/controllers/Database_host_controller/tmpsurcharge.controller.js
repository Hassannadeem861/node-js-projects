const Tmpsurcharge = require("../../models/Database_host_model/tmpsurcharge.model");


// Create and Save a new Tmpsurcharge
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ClerkName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tmpsurcharge
  const tmpsurcharge = {
    ClerkName: req.body.ClerkName,
    DateTime: req.body.DateTime,
    Surcharge1: req.body.Surcharge1,
    Surcharge2: req.body.Surcharge2,
    Surcharge3: req.body.Surcharge3,
    TotalSurcharge: req.body.TotalSurcharge,
    invNo: req.body.invNo,
    VatTotal: req.body.VatTotal,
    HisDay: req.body.HisDay,
    HisMonth: req.body.HisMonth,
    HisYear: req.body.HisYear,
   
   
  };

  // Save Tmpsurcharge in the database
  Tmpsurcharge.create(tmpsurcharge)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmpsurcharge.",
      });
    });
};

// Retrieve all Tmpsurcharges from the database.
exports.findAll = (req, res) => {
  const title = req.query.ClerkName;
  var condition = title ? { ClerkName: { [Op.like]: `%${ClerkName}%` } } : null;

  Tmpsurcharge.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpsurcharges.",
      });
    });
};

// Find a single Tmpsurcharge with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmpsurcharge.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tmpsurcharge with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tmpsurcharge with id=" + id,
      });
    });
};

// Update a Tmpsurcharge by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmpsurcharge.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpsurcharge was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tmpsurcharge with id=${id}. Maybe Tmpsurcharge was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tmpsurcharge with id=" + id,
      });
    });
};

// Delete a Tmpsurcharge with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmpsurcharge.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpsurcharge was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tmpsurcharge with id=${id}. Maybe Tmpsurcharge was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tmpsurcharge with id=" + id,
      });
    });
};

// Delete all Tmpsurcharges from the database.
exports.deleteAll = (req, res) => {
  Tmpsurcharge.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmpsurcharges were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tmpsurcharges.",
      });
    });
};

// Find all published Tmpsurcharges
exports.findAllPublished = (req, res) => {
  Tmpsurcharge.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpsurcharges.",
      });
    });
};
