// Tbl_ibt_qtyprices_update.controller.js
const Tbl_ibt_qtyprices_update = require("../../models/Database_hoststockmaster_model/tbl_ibt_qtyprices_update.model");


// Create and Save a new Tbl_ibt_qtyprices_update
exports.create = (req, res) => {
    // Validate request
    if (!req.body.PricePos) {
        res.status(400).send({ message: "PricePos can not be empty!" });
        return;
    }

    const tbl_ibt_qtyprices_update = {
        PricePos: req.body.PricePos,
        StockCode: req.body.StockCode,
        Quantity: req.body.Quantity,
        Price: req.body.Price,
        StoreLocationName: req.body.StoreLocationName,
        StoreLocationODBC: req.body.StoreLocationODBC,
        StoreMainName: req.body.StoreMainName,
        StoreMainODBC: req.body.StoreMainODBC,
        Status: req.body.Status,
    };

    // Save Tbl_ibt_qtyprices_update in the database
    Tbl_ibt_qtyprices_update.create(tbl_ibt_qtyprices_update)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_qtyprices_update."
            });
        });
};

// Retrieve all Tbl_ibt_qtyprices_update from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_qtyprices_update.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_qtyprices_update."
            });
        });
};

// Find a single Tbl_ibt_qtyprices_update with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_qtyprices_update.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_qtyprices_update with id=" + id
            });
        });
};

// Update a Tbl_ibt_qtyprices_update by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_qtyprices_update.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_qtyprices_update was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_qtyprices_update with id=${id}. Maybe Tbl_ibt_qtyprices_update was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_qtyprices_update with id=" + id
            });
        });
};

// Delete a Tbl_ibt_qtyprices_update with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_qtyprices_update.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_qtyprices_update was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_qtyprices_update with id=${id}. Maybe Tbl_ibt_qtyprices_update was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_qtyprices_update with id=" + id
            });
        });
};

// Delete all Tbl_ibt_qtyprices_update from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_qtyprices_update.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_qtyprices_update were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_qtyprices_update."
            });
        });
};
