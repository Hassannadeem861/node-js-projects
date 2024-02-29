const Tblpp = require("../../models/Database_host_model/tblpp.model");


// Create and Save a new Tblpp
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Sdate) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tblpp
  const tblpp = {
    Sdate: req.body.Sdate,
    DocNo: req.body.DocNo,
    StockCode: req.body.StockCode ,
    Description: req.body.Description,
    Qty: req.body.Qty,
    ACost: req.body.ACost ,
    Aselling: req.body.Aselling,
    LineTotal: req.body.LineTotal,
    AGPV: req.body.AGPV ,
    AGPP: req.body.AGPP ,
  };

  // Save Tblpp in the database
  Tblpp.create( tblpp)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblpp.",
      });
    });
};

// Retrieve all Tblpps from the database.
exports.findAll = (req, res) => {
  const title = req.query.Sdate;
  var condition = title ? { Sdate: { [Op.like]: `%${Sdate}%` } } : null;

  Tblpp.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblpps.",
      });
    });
};

// Find a single Tblpp with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblpp.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tblpp with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tblpp with id=" + id,
      });
    });
};

// Update a Tblpp by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblpp.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblpp was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tblpp with id=${id}. Maybe Tblpp was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tblpp with id=" + id,
      });
    });
};

// Delete a Tblpp with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tblpp.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tblpp was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tblpp with id=${id}. Maybe Tblpp was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tblpp with id=" + id,
      });
    });
};

// Delete all Tblpps from the database.
exports.deleteAll = (req, res) => {
  Tblpp.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tblpps were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tblpps.",
      });
    });
};

// Find all published Tblpps
exports.findAllPublished = (req, res) => {
  Tblpp.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tblpps.",
      });
    });
};
