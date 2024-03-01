// tmpmainstocktake.controller.js
const Tmpmainstocktake = require("../../models/Database_hoststockmaster_model/tmpmainstocktake.model");


// Create and Save a new tmpmainstocktake
exports.create = (req, res) => {
    // Validate request
    if (!req.body.stocklistname) {
        res.status(400).send({ message: "stocklistname can not be empty!" });
        return;
    }

    const tmpmainpcstocktake = {
        stocklistname: req.body.stocklistname,
        stockcode: req.body.stockcode,
        stockbarcode: req.body.stockbarcode,
        description: req.body.description,
        stockcount: req.body.stockcount,
    };



    // Save Tmpmainstocktake in the database
    Tmpmainstocktake.create(tmpmainpcstocktake)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpmainstocktake."
            });
        });
};

// Retrieve all Tmpmainstocktake from the database.
exports.findAll = (req, res) => {
    Tmpmainstocktake.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpmainstocktake."
            });
        });
};

// Find a single Tmpmainstocktake with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpmainstocktake.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpmainstocktake with id=" + id
            });
        });
};

// Update a Tmpmainstocktake by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpmainstocktake.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpmainstocktake was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpmainstocktake with id=${id}. Maybe Tmpmainstocktake was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpmainstocktake with id=" + id
            });
        });
};

// Delete a Tmpmainstocktake with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpmainstocktake.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpmainstocktake was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpmainstocktake with id=${id}. Maybe Tmpmainstocktake was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpbarcode with id=" + id
            });
        });
};

// Delete all Tmpmainstocktake from the database.
exports.deleteAll = (req, res) => {
    Tmpmainstocktake.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpmainstocktake were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpmainstocktake."
            });
        });
};
