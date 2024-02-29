const Tblavgsuppliersale = require("../../models/Database_host_model/tblavgsuppliersale.model");


// Create and Save a new Tblavgsuppliersale
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({ message: "All fields are required!" });
    return;
  }

  // Create a Tblavgsuppliersale
  const tblavgsuppliersale = {
    StockCode: req.body.StockCode,
    StockDescription: req.body.StockDescription,
    Week1: req.body.Week1,
    Week2: req.body.Week2,
    Week3: req.body.Week3,
    Week4: req.body.Week4,
    Week5: req.body.Week5,
    Week6: req.body.Week6,
    Cost: req.body.Cost,
    Selling: req.body.Selling,
    SOH: req.body.SOH,
    MinStock: req.body.MinStock,
    MaxStock: req.body.MaxStock,
    supplierCode: req.body.supplierCode,
    SupplierName: req.body.SupplierName
  };

  // Save Tblavgsuppliersale in the database
  Tblavgsuppliersale.create(tblavgsuppliersale)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tblavgsuppliersale."
      });
    });
};

// Retrieve all Tblavgsuppliersales from the database.
exports.findAll = (req, res) => {
    Tblavgsuppliersale.findAll()
        .then((tblavgsuppliersales) => {
            res.send(tblavgsuppliersales);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tblavgsuppliersales.",
            });
        });
};


// Find a single Tblavgsuppliersale with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tblavgsuppliersale.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tblavgsuppliersale with id=" + id
      });
    });
};

// Update a Tblavgsuppliersale by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tblavgsuppliersale.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tblavgsuppliersale was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tblavgsuppliersale with id=${id}. Maybe Tblavgsuppliersale was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tblavgsuppliersale with id=" + id
      });
    });
};

// Delete a Tblavgsuppliersale with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tblavgsuppliersale.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Tblavgsuppliersale was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Tblavgsuppliersale with id=${id}. Maybe Tblavgsuppliersale was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Tblavgsuppliersale with id=" + id,
        });
      });
  };
  
  // Delete all Tblavgsuppliersales from the database.
  exports.deleteAll = (req, res) => {
    Tblavgsuppliersale.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} Tblavgsuppliersales were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Tblavgsuppliersales.",
        });
      });
  };
