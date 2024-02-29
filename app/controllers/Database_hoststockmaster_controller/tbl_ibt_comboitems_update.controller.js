// tbl_ibt_comboitems_update.controller.js
const Tbl_ibt_comboitems_update = require("../../models/Database_hoststockmaster_model/tbl_ibt_comboitems_update.model");


// Create and Save a new Tbl_ibt_comboitems_update
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode can not be empty!" });
        return;
    }

    // Create a Tbl_ibt_comboitems_update
    const tbl_ibt_comboitems_update = {
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


    // Save Tbl_ibt_comboitems_update in the database
    Tbl_ibt_comboitems_update.create(tbl_ibt_comboitems_update)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_comboitems_update."
            });
        });
};

// Retrieve all Tbl_ibt_comboitems_update from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_comboitems_update.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_comboitems_update."
            });
        });
};

// Find a single Tbl_ibt_comboitems_update with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_comboitems_update.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_comboitems_update with id=" + id
            });
        });
};

// Update a Tbl_ibt_comboitems_update by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_comboitems_update.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_comboitems_update was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_comboitems_update with id=${id}. Maybe Tbl_ibt_comboitems_update was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_comboitems_update with id=" + id
            });
        });
};

// Delete a Tbl_ibt_comboitems_update with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_comboitems_update.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_comboitems_update was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_comboitems_update with id=${id}. Maybe Tbl_ibt_comboitems_update was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_comboitems_update with id=" + id
            });
        });
};

// Delete all Tbl_ibt_comboitems_update from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_comboitems_update.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_comboitems_update were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_comboitems_update."
            });
        });
};
