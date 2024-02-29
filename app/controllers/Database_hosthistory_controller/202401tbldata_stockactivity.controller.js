
const Tbldata_stockactivity = require("../../models/Database_hosthistory_model/202401tbldata_stockactivity.model");


// Create and Save a new Tbldata_stockactivity
exports.create = (req, res) => {
  // Validate request
  if (!req.body.datetime) {
    res.status(400).send({
      message: "Datetime can not be empty!",
    });
    return;
  }

 // Create a Tbldata_stockactivity
 const tbl_data_stock_activity = {
    datetime: req.body.datetime,
    stockcode: req.body.stockcode,
    stockdescription: req.body.stockdescription,
    majorno: req.body.majorno,
    sub1no: req.body.sub1no,
    sub2no: req.body.sub2no,
    openqty: req.body.openqty,
    closeQty: req.body.closeQty,
    soldQty: req.body.soldQty,
    receivedqty: req.body.receivedqty,
    adjustedQty: req.body.adjustedQty,
    stocktakediffQty: req.body.stocktakediffQty,
    usedincombinedQty: req.body.usedincombinedQty,
    soldtotalexclselling: req.body.soldtotalexclselling,
    soldtotalcost: req.body.soldtotalcost,
    rectotalexclselling: req.body.rectotalexclselling,
    rectotalcost: req.body.rectotalcost,
    Hisday: req.body.Hisday,
    HisMonth: req.body.HisMonth,
    Hisyear: req.body.Hisyear,
    valuechange: req.body.valuechange
  };

  // Save Tbldata_stockactivity in the database
  Tbldata_stockactivity.create(tbl_data_stock_activity)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Tbldata_stockactivity.",
      });
    });
};

// Retrieve all Tbldata_stockactivity from the database
exports.findAll = (req, res) => {
    Tbldata_stockactivity.findAll()
    .then((tbldata_stockactivities) => {
      res.send(tbldata_stockactivities);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_stockactivitys.",
      });
    });
};

// Find a single Tbldata_stockactivity with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_stockactivity.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving tbldata_stockactitvity with id=" + id,
      });
    });
};

// Update a Tbldata_stockactivity by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_stockactivity.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_stockactivity was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldata_stockactivity with id=${id}. Maybe Tbldata_stockactivity was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldata_stockactivity with id=" + id,
      });
    });
};

// Delete a Tbldata_stockactivity with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_stockactivity.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_stockactivity was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldata_stockactivity with id=${id}. Maybe Tbldata_stockactivity was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldata_stockactivity with id=" + id,
      });
    });
};

// Delete all Tbldata_stockactivity from the database
exports.deleteAll = (req, res) => {
    Tbldata_stockactivity.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldata_stockactivitys were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldata_stockactivitys.",
      });
    });
};
