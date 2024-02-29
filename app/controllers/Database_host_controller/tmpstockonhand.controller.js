const Tmpstockonhand = require("../../models/Database_host_model/tmpstockonhand.model");


// Create and Save a new Tmpstockonhand
exports.create = (req, res) => {
  // Validate request
  if (!req.body.StockCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tmpstockonhand
  const tmpstockonhand = {
    StockCode: req.body.StockCode,
    StockBarCode: req.body.StockBarCode,
    Description1: req.body.Description1,
    Description2: req.body.Description2,
    ItemComment: req.body.ItemComment,
    MajorNo: req.body.MajorNo,
    Sub1No: req.body.Sub1No,
    Sub2No: req.body.Sub2No,
    StockonHand: req.body.StockonHand,
    DiscQty: req.body.DiscQty,
    MinStock: req.body.MinStock,
    Maxstock: req.body.Maxstock,
    StockOnOrder: req.body.StockOnOrder,
    MaximumDiscount: req.body.MaximumDiscount,
    AvarageCostPrice: req.body.AvarageCostPrice,
    LastCostPrice: req.body.LastCostPrice,
    VatPercentage: req.body.VatPercentage,
    DefaultSellingPrice: req.body.DefaultSellingPrice,
    LaybyeStock: req.body.LaybyeStock,
    AskPC: req.body.AskPC,
    AskDC: req.body.AskDC,
    Picture: req.body.Picture,
    SerialItem: req.body.SerialItem,
    NettCost: req.body.NettCost,
    MajorName: req.body.MajorName,
    Sub1Name: req.body.Sub1Name,
    Sub2Name: req.body.Sub2Name,
    TCost: req.body.TCost,
    TSelling: req.body.TSelling
  };

  // Save Tmpstockonhand in the database
  Tmpstockonhand.create(tmpstockonhand)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tmpstockonhand.",
      });
    });
};

// Retrieve all Tmpstockonhands from the database.
exports.findAll = (req, res) => {
  const title = req.query.StockCode;
  var condition = title ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

  Tmpstockonhand.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpstockonhands.",
      });
    });
};

// Find a single Tmpstockonhand with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tmpstockonhand.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tmpstockonhand with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tmpstockonhand with id=" + id,
      });
    });
};

// Update a Tmpstockonhand by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tmpstockonhand.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpstockonhand was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tmpstockonhand with id=${id}. Maybe Tmpstockonhand was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tmpstockonhand with id=" + id,
      });
    });
};

// Delete a Tmpstockonhand with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tmpstockonhand.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tmpstockonhand was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tmpstockonhand with id=${id}. Maybe Tmpstockonhand was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tmpstockonhand with id=" + id,
      });
    });
};

// Delete all Tmpstockonhands from the database.
exports.deleteAll = (req, res) => {
  Tmpstockonhand.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tmpstockonhands were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tmpstockonhands.",
      });
    });
};

// Find all published Tmpstockonhands
exports.findAllPublished = (req, res) => {
  Tmpstockonhand.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tmpstockonhands.",
      });
    });
};
