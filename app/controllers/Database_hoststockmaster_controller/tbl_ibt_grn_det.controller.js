// tbl_ibt_comboitems.controller.js
const Tbl_ibt_grn_det = require("../../models/Database_hoststockmaster_model/tbl_ibt_grn_det.model");


// Create and Save a new Tbl_ibt_grn_det
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.User) {
    //     res.status(400).send({ message: "User can not be empty!" });
    //     return;
    // }

    // Create a Tbl_ibt_grn_det
    const tbl_ibt_grn_det = {
        DateTime: req.body.DateTime,
        InvoiceNumber: req.body.InvoiceNumber,
        TransactionNumber: req.body.TransactionNumber,
        StockCode: req.body.StockCode,
        CreditorItemCode: req.body.CreditorItemCode,
        Description: req.body.Description,
        QuantityReceived: req.body.QuantityReceived,
        BonusQuantity: req.body.BonusQuantity,
        QuantityOrdered: req.body.QuantityOrdered,
        ExclusiveUnitCost: req.body.ExclusiveUnitCost,
        InclusiveUnitCost: req.body.InclusiveUnitCost,
        Markup: req.body.Markup,
        ExclusiveSelling: req.body.ExclusiveSelling,
        InclusiveSelling: req.body.InclusiveSelling,
        VATPercentage: req.body.VATPercentage,
        Discount1: req.body.Discount1,
        Discount2: req.body.Discount2,
        DiscountCurrency: req.body.DiscountCurrency,
        LineTotal: req.body.LineTotal,
        GRVNum: req.body.GRVNum,
        Shipping: req.body.Shipping,
        Handling: req.body.Handling,
        Other: req.body.Other,
        Subtotal: req.body.Subtotal,
        Discount: req.body.Discount,
        VAT: req.body.VAT,
        SupplierCode: req.body.SupplierCode,
        User: req.body.User,
        hisYear: req.body.hisYear,
        hisMonth: req.body.hisMonth,
        hisDay: req.body.hisDay,
        ShipSuppl: req.body.ShipSuppl,
        Comment: req.body.Comment,
    };


    // Save Tbl_ibt_grn_det in the database
    Tbl_ibt_grn_det.create(tbl_ibt_grn_det)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_grn_det."
            });
        });
};

// Retrieve all Tbl_ibt_grn_det from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_grn_det.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_grn_det."
            });
        });
};

// Find a single Tbl_ibt_grn_det with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_grn_det.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_grn_det with id=" + id
            });
        });
};

// Update a Tbl_ibt_grn_det by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_grn_det.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_grn_det was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_grn_det with id=${id}. Maybe Tbl_ibt_grn_det was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_grn_det with id=" + id
            });
        });
};

// Delete a Tbl_ibt_grn_det with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_grn_det.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_grn_det was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_grn_det with id=${id}. Maybe Tbl_ibt_grn_det was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_grn_det with id=" + id
            });
        });
};

// Delete all Tbl_ibt_grn_det from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_grn_det.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_grn_det were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_grn_det."
            });
        });
};
