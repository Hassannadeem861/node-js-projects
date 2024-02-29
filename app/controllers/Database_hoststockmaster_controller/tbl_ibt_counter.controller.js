// tbl_ibt_comboitems.controller.js
const Tbl_ibt_counter = require("../../models/Database_hoststockmaster_model/tbl_ibt_counter.model");


// Create and Save a new Tbl_ibt_counter
exports.create = (req, res) => {
    // Validate request
    if (!req.body.IBTCounter) {
        res.status(400).send({ message: "IBTCounter can not be empty!" });
        return;
    }

    // Create a Tbl_ibt_counter
    const tbl_ibt_counter = {
        IBTCounter: req.body.IBTCounter,

    };


    // Save Tbl_ibt_counter in the database
    Tbl_ibt_counter.create(tbl_ibt_counter)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_counter."
            });
        });
};

// Retrieve all Tbl_ibt_counter from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_counter.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_counter."
            });
        });
};

// Find a single Tbl_ibt_counter with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_counter.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_counter with id=" + id
            });
        });
};

// Update a Tbl_ibt_counter by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_counter.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_counter was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_counter with id=${id}. Maybe Tbl_ibt_counter was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_counter with id=" + id
            });
        });
};

// Delete a Tbl_ibt_counter with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_counter.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_counter was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_counter with id=${id}. Maybe Tbl_ibt_counter was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_counter with id=" + id
            });
        });
};

// Delete all Tbl_ibt_counter from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_counter.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_counter were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_counter."
            });
        });
};
