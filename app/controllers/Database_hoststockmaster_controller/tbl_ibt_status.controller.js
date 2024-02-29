// Tbl_ibt_status.controller.js
const Tbl_ibt_status = require("../../models/Database_hoststockmaster_model/tbl_ibt_status.model");


// Create and Save a new Tbl_ibt_status
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCreation) {
        res.status(400).send({ message: "StockCreation can not be empty!" });
        return;
    }


    const tbl_ibt_status = {
        StockCreation: req.body.StockCreation,
        StockUpdate: req.body.StockUpdate,
        IBTTransactions: req.body.IBTTransactions,

    };

    // Save Tbl_ibt_status in the database
    Tbl_ibt_status.create(tbl_ibt_status)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_status."
            });
        });
};

// Retrieve all Tbl_ibt_status from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_status.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_status."
            });
        });
};

// Find a single Tbl_ibt_status with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_status.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_status with id=" + id
            });
        });
};

// Update a Tbl_ibt_status by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_status.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_status was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_status with id=${id}. Maybe Tbl_ibt_status was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_status with id=" + id
            });
        });
};

// Delete a Tbl_ibt_status with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_status.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_status was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_status with id=${id}. Maybe Tbl_ibt_status was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_status with id=" + id
            });
        });
};

// Delete all Tbl_ibt_status from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_status.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_status were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_status."
            });
        });
};
