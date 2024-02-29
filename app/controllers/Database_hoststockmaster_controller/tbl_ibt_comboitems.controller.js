// tbl_ibt_comboitems.controller.js
const Tbl_ibt_comboitems = require("../../models/Database_hoststockmaster_model/tbl_ibt_comboitems.model");


// Create and Save a new Tbl_ibt_comboitems
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode can not be empty!" });
        return;
    }

    // Create a Tbl_ibt_comboitems
    const tblIBTComboItem = {
        StockCode: req.body.StockCode,
        ItemDescription: req.body.ItemDescription,
        Quantity: req.body.Quantity,
        UnitPrice: req.body.UnitPrice,
        ComboPrice: req.body.ComboPrice,
        QtyThresholds: req.body.QtyThresholds,
        RetailPrice: req.body.RetailPrice,
        StoreLocationName: req.body.StoreLocationName,
        StoreLocationODBC: req.body.StoreLocationODBC,
        StoreMainName: req.body.StoreMainName,
        StoreMainODBC: req.body.StoreMainODBC,
        Status: req.body.Status,
    };


    // Save Tbl_ibt_comboitems in the database
    Tbl_ibt_comboitems.create(tblIBTComboItem)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_comboitems."
            });
        });
};

// Retrieve all Tbl_ibt_comboitems from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_comboitems.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_comboitems."
            });
        });
};

// Find a single Tbl_ibt_comboitems with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_comboitems.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_comboitems with id=" + id
            });
        });
};

// Update a Tbl_ibt_comboitems by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_comboitems.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_comboitems was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_comboitems with id=${id}. Maybe Tbl_ibt_comboitems was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_comboitems with id=" + id
            });
        });
};

// Delete a Tbl_ibt_comboitems with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_comboitems.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_comboitems was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_comboitems with id=${id}. Maybe Tbl_ibt_comboitems was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_comboitems with id=" + id
            });
        });
};

// Delete all Tbl_ibt_comboitems from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_comboitems.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_comboitems were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_comboitems."
            });
        });
};
