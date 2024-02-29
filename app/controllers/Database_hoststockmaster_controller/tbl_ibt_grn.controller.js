// tbl_ibt_grn.controller.js
const Tbl_ibt_grn = require("../../models/Database_hoststockmaster_model/tbl_ibt_grn.model");


// Create and Save a new Tbl_ibt_grn
exports.create = (req, res) => {
    // Validate request
    if (!req.body.InvoiceNumber) {
        res.status(400).send({ message: "InvoiceNumber can not be empty!" });
        return;
    }
    const tbl_ibt_grn = {
        GRVNum: req.body.GRVNum,
        InvoiceNumber: req.body.InvoiceNumber,
        InvoiceName: req.body.InvoiceName,
        SupplierCode: req.body.SupplierCode,
        Shipping: req.body.Shipping,
        Handling: req.body.Handling,
        Other: req.body.Other,
        SubTotal: req.body.SubTotal,
        Discount: req.body.Discount,
        VAT: req.body.VAT,
        DateTime: req.body.DateTime,
        HisDay: req.body.HisDay,
        HisMonth: req.body.HisMonth,
        HisYear: req.body.HisYear,
    };


    // Save Tbl_ibt_grn in the database
    Tbl_ibt_grn.create(tbl_ibt_grn)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_grn."
            });
        });
};

// Retrieve all Tbl_ibt_grn from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_grn.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_grn."
            });
        });
};

// Find a single Tbl_ibt_grn with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_grn.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_grn with id=" + id
            });
        });
};

// Update a Tbl_ibt_grn by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_grn.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_grn was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_grn with id=${id}. Maybe Tbl_ibt_grn was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_grn with id=" + id
            });
        });
};

// Delete a Tbl_ibt_grn with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_grn.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_grn was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_grn with id=${id}. Maybe Tbl_ibt_grn was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_grn with id=" + id
            });
        });
};

// Delete all Tbl_ibt_grn from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_grn.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_grn were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_grn."
            });
        });
};
