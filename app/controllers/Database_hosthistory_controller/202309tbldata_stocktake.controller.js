const Tbldata_stocktake = require("../../models/Database_hosthistory_model/202309tbldata_stocktake.model");


// Create and Save a new Tbldata_stocktake
exports.create = (req, res) => {
  // Validate request
  if (!req.body.datetime) {
    res.status(400).send({ message: "All fields are required!" });
    return;
  }

  // Create a Tbldata_stocktake
  const tbldata_stocktake = {
    datetime: req.body.datetime,
    Stockcode: req.body.Stockcode,
    Description: req.body.Description,
    AdjustQuantityShelf: req.body.AdjustQuantityShelf,
    OldShelfQuantity: req.body.OldShelfQuantity,
    NewShelfQuantity: req.body.NewShelfQuantity,
    AdjustQuantityFile: req.body.AdjustQuantityFile,
    OldFileQuantity: req.body.OldFileQuantity,
    NewFileQuantity: req.body.NewFileQuantity,
    CostPrice: req.body.CostPrice,
    StockTakeNum: req.body.StockTakeNum,
    StockTakeType: req.body.StockTakeType,
    User: req.body.User,
    Print: req.body.Print,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth,
    HisDay: req.body.HisDay,
  };

  // Save Tbldata_stocktake in the database
  Tbldata_stocktake.create(tbldata_stocktake)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldata_stocktake."
      });
    });
};

// Retrieve all Tbldata_stocktakes from the database
exports.findAll = (req, res) => {
  Tbldata_stocktake.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbldata_stocktakes."
      });
    });
};

// Find a single Tbldata_stocktake with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_stocktake.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tbldata_stocktake with id=" + id
      });
    });
};

// Update a Tbldata_stocktake by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_stocktake.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tbldata_stocktake was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tbldata_stocktake with id=${id}. Maybe Tbldata_stocktake was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tbldata_stocktake with id=" + id
      });
    });
};

// Delete a Tbldata_stocktake with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_stocktake.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tbldata_stocktake was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tbldata_stocktake with id=${id}. Maybe Tbldata_stocktake was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tbldata_stocktake with id=" + id
      });
    });
};

// Delete all Tbldata_stocktakes from the database
exports.deleteAll = (req, res) => {
  Tbldata_stocktake.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tbldata_stocktakes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tbldata_stocktakes."
      });
    });
};
