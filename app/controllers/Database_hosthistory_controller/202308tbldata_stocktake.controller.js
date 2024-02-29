const Tbldata_stocktake = require("../../models/Database_hosthistory_model/202308tbldata_stocktake.model");

// Create and Save a new Tbldata_stocktake
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Stockcode) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Tbldata_stocktake
  const tbldata_stocktake = {
    dateTime: req.body.dateTime,
    Stockcode: req.body.Stockcode,
    Description: req.body.Description,
    AdjustQuantityShelf: req.body.AdjustQuantityShelf,
    OldShelfQuantity: req.body.OldShelfQuantity,
    NewShelfQuantity: req.body.NewShelfQuantity,
    CostPrice: req.body.CostPrice,
    StockTakeNum: req.body.StockTakeNum,
    StockTakeType: req.body.StockTakeType,
    User: req.body.User,
    Print: req.body.Print,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth,
    HisDay: req.body.HisDay,
  };

  // Save Tbldata_stocktake in the Tbldata_stocktake
  Tbldata_stocktake.create(tbldata_stocktake)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldata_stocktake.",
      });
    });
};

// Retrieve all Tbldata_stocktake from the database.
exports.findAll = (req, res) => {
  const Stockcode = req.query.Stockcode;
  var condition = Stockcode ? { Stockcode: { [Op.like]: `%${Stockcode}%` } } : null;

  Tbldata_stocktake.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_stocktake.",
      });
    });
};

// Find a single Tbldata_stocktake with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_stocktake.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldata_stocktake with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldata_stocktake with id=" + id,
      });
    });
};

// Update a Tbldata_stocktake by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_stocktake.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_stocktake was updated successfully.",
        });
      } else {
        res.status(400).send({
          message: `Cannot update Tbldata_stocktake with id=${id}. Maybe Tbldata_cancel_tran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldata_stocktake with id=" + id,
      });
    });
};

// Delete a Tbldata_stocktake with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_stocktake.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_stocktake was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Tbldata_stocktake with id=${id}. Maybe Tbldata_stocktake was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldata_stocktake with id=" + id,
      });
    });
};

// Delete all Tbldata_cash_up from the database.
exports.deleteAll = (req, res) => {
    Tbldata_stocktake.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldata_stocktake were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldata_stocktake.",
      });
    });
};

// Find all published Tbldata_cash_up
exports.findAllPublished = (req, res) => {
    Tbldata_stocktake.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_stocktake.",
      });
    });
};
