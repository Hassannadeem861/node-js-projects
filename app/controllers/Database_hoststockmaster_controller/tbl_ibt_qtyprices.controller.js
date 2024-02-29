// Tbl_ibt_qtyprices.controller.js
const Tbl_ibt_qtyprices = require("../../models/Database_hoststockmaster_model/tbl_ibt_qtyprices.model");


// Create and Save a new Tbl_ibt_qtyprices
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode can not be empty!" });
        return;
    }


    const tbl_ibt_qtyprices = {
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

    // Use Tbl_ibt_qtyprices in your logic or pass it to your model for database operations


    // Save Tbl_ibt_qtyprices in the database
    Tbl_ibt_qtyprices.create(tbl_ibt_qtyprices)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_qtyprices."
            });
        });
};

// Retrieve all Tbl_ibt_qtyprices from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_qtyprices.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_qtyprices."
            });
        });
};

// Find a single Tbl_ibt_qtyprices with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_qtyprices.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_qtyprices with id=" + id
            });
        });
};

// Update a Tbl_ibt_qtyprices by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_qtyprices.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_qtyprices was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_qtyprices with id=${id}. Maybe Tbl_ibt_qtyprices was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_qtyprices with id=" + id
            });
        });
};

// Delete a Tbl_ibt_qtyprices with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_qtyprices.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_qtyprices was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_qtyprices with id=${id}. Maybe Tbl_ibt_qtyprices was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_qtyprices with id=" + id
            });
        });
};

// Delete all Tbl_ibt_qtyprices from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_qtyprices.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_qtyprices were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_qtyprices."
            });
        });
};
