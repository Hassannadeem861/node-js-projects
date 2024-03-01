// tmpsums.controller.js
const Tmpsums = require("../../models/Database_hoststockmaster_model/tmpsums.model");


// Create and Save a new tmpsums
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode can not be empty!" });
        return;
    }

    const tmpsums = {
        StockCode: req.body.StockCode,
        RCost: req.body.RCost,
        RSelling: req.body.RSelling,
    };




    // Save tmpsums in the database
    Tmpsums.create(tmpsums)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpsums."
            });
        });
};

// Retrieve all Tmpsums from the database.
exports.findAll = (req, res) => {
    Tmpsums.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpsums."
            });
        });
};

// Find a single Tmpsums with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpsums.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpsums with id=" + id
            });
        });
};

// Update a Tmpsums by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpsums.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpsums was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpsums with id=${id}. Maybe Tmpsums was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpsums with id=" + id
            });
        });
};

// Delete a Tmpsums with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpsums.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpsums was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpsums with id=${id}. Maybe Tmpsums was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpsums with id=" + id
            });
        });
};

// Delete all Tmpsums from the database.
exports.deleteAll = (req, res) => {
    Tmpsums.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpsums were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpsums."
            });
        });
};
