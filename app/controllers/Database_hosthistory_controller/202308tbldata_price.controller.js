// controllers/202310tbldata_current_tran.controller.js
const Tbldata_price = require("../../models/Database_hosthistory_model/202308tbldata_price.model");

// const db = require("../models");
// const Tbldata_price = db.tbl_data_price;
// const Op = db.Sequelize.Op;

// Create and Save a new tbldata_price
exports.create = (req, res) => {
  // Validate request
  if (!req.body.datetime) {
    res.status(400).send({
      message: "Datetime can not be empty!",
    });
    return;
  }

 // Create a tbldata_price
 const tbl_data_price = {
    datetime: req.body.datetime,
    stockcode: req.body.stockcode,
    description: req.body.description,
    user: req.body.user,
    avgcost: req.body.avgcost,
    newavgcost: req.body.newavgcost,
    lastavgcost: req.body.lastavgcost,
    newlastavgcost: req.body.newlastavgcost,
    defselling: req.body.defselling,
    newdefselling: req.body.newdefselling,
    pricedescription: req.body.pricedescription,
    oldprice: req.body.oldprice,
    newprice: req.body.newprice,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth,
    Hisday: req.body.Hisday,
    valuechange: req.body.valuechange
  };

  // Save tbldata_price in the database
  Tbldata_price.create(tbl_data_price)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the tbldata_price.",
      });
    });
};

// Retrieve all tbldata_price from the database
exports.findAll = (req, res) => {
  Tbldata_price.findAll()
    .then((tbldata_prices) => {
      res.send(tbldata_prices);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbldata_prices.",
      });
    });
};

// Find a single tbldata_price with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_price.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving tbldata_price with id=" + id,
      });
    });
};

// Update a tbldata_price by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_price.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "tbldata_price was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update tbldata_price with id=${id}. Maybe tbldata_price was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating tbldata_price with id=" + id,
      });
    });
};

// Delete a tbldata_price with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_price.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "tbldata_price was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete tbldata_price with id=${id}. Maybe tbldata_price was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete tbldata_price with id=" + id,
      });
    });
};

// Delete all tbldata_price from the database
exports.deleteAll = (req, res) => {
  Tbldata_price.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} tbldata_prices were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tbldata_prices.",
      });
    });
};
