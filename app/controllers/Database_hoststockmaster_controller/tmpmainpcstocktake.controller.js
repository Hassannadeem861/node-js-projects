// tmpmainpcstocktake.controller.js
const Tmpmainpcstocktake = require("../../models/Database_hoststockmaster_model/tmpmainpcstocktake.model");


// Create and Save a new tmpmainpcstocktake
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



    // Save tmpmainpcstocktake in the database
    Tmpmainpcstocktake.create(tmpmainpcstocktake)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpmainpcstocktake."
            });
        });
};

// Retrieve all Tmpmainpcstocktake from the database.
exports.findAll = (req, res) => {
    Tmpmainpcstocktake.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpmainpcstocktake."
            });
        });
};

// Find a single Tmpmainpcstocktake with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpmainpcstocktake.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpmainpcstocktake with id=" + id
            });
        });
};

// Update a Tmpmainpcstocktake by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpmainpcstocktake.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpmainpcstocktake was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpmainpcstocktake with id=${id}. Maybe Tmpmainpcstocktake was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpmainpcstocktake with id=" + id
            });
        });
};

// Delete a Tmpmainpcstocktake with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpmainpcstocktake.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpmainpcstocktake was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpmainpcstocktake with id=${id}. Maybe Tmpmainpcstocktake was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpbarcode with id=" + id
            });
        });
};

// Delete all Tmpmainpcstocktake from the database.
exports.deleteAll = (req, res) => {
    Tmpmainpcstocktake.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpmainpcstocktake were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpmainpcstocktake."
            });
        });
};
