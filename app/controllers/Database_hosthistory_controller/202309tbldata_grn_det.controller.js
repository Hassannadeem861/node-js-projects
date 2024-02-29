const Tbldata_grn_det = require("../../models/Database_hosthistory_model/202309tbldata_grn_det.model");


// Create and Save a new Tbldata_grn_det
exports.create = (req, res) => {
  // Validate request
  if (!req.body.datetime) {
    res.status(400).send({ message: "All fields are required!" });
    return;
  }

  // Create a Tbldata_grn_det
  const tbldata_grn_det = {
    datetime: req.body.datetime,
    invoicenumber: req.body.invoicenumber,
    transactionnumber: req.body.transactionnumber,
    stockcode: req.body.stockcode,
    creditoritemcode: req.body.creditoritemcode,
    description: req.body.description,
    quantityreceived: req.body.quantityreceived,
    bonusquantity: req.body.bonusquantity,
    quantityordered: req.body.quantityordered,
    exclusiveunitcost: req.body.exclusiveunitcost,
    inclusiveunitcost: req.body.inclusiveunitcost,
    markup: req.body.markup,
    exclusiveselling: req.body.exclusiveselling,
    inclusiveselling: req.body.inclusiveselling,
    vatpercentage: req.body.vatpercentage,
    discount1: req.body.discount1,
    discount2: req.body.discount2,
    discountcurrency: req.body.discountcurrency,
    linetotal: req.body.linetotal,
    grvnum: req.body.grvnum,
    shipping: req.body.shipping,
    handling: req.body.handling,
    other: req.body.other,
    subtotal: req.body.subtotal,
    discount: req.body.discount,
    vat: req.body.vat,
    suppliercode: req.body.suppliercode,
    user: req.body.user,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth,
    Hisday: req.body.Hisday,
    shipsuppl: req.body.shipsuppl,
    comment: req.body.comment,
  };

  // Save Tbldata_grn_det in the database
  Tbldata_grn_det.create(tbldata_grn_det)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldata_grn_det."
      });
    });
};

// Retrieve all Tbldata_grn_dets from the database
exports.findAll = (req, res) => {
  Tbldata_grn_det.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tbldata_grn_det with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_grn_det.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tbldata_grn_det with id=" + id
      });
    });
};

// Update a Tbldata_grn_det by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_grn_det.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tbldata_grn_det was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tbldata_grn_det with id=${id}. Maybe Tbldata_grn_det was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tbldata_grn_det with id=" + id
      });
    });
};
// Delete a Tbldata_grn_det with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tbldata_grn_det.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tbldata_grn_det was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tbldata_grn_det with id=${id}. Maybe Tbldata_grn_det was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tbldata_grn_det with id=" + id
        });
      });
  };
  
  // Delete all Tbldata_grn_dets from the database
  exports.deleteAll = (req, res) => {
    Tbldata_grn_det.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tbldata_grn_dets were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };