// tmpsalesrep.controller.js
const Tmpsalesrep = require("../../models/Database_hoststockmaster_model/tmpsalesrep.model");


// Create and Save a new tmpsalesrep
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({ message: "DateTime can not be empty!" });
        return;
    }

    const tmpsalesrep = {
        DateTime: req.body.DateTime,
        SaleNum: req.body.SaleNum,
        Repcode: req.body.Repcode,
        RepName: req.body.RepName,
    };



    // Save Tmpsalesrep in the database
    Tmpsalesrep.create(tmpsalesrep)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpsalesrep."
            });
        });
};

// Retrieve all Tmpsalesrep from the database.
exports.findAll = (req, res) => {
    Tmpsalesrep.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpsalesrep."
            });
        });
};

// Find a single Tmpsalesrep with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpsalesrep.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpsalesrep with id=" + id
            });
        });
};

// Update a Tmpsalesrep by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpsalesrep.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpsalesrep was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpsalesrep with id=${id}. Maybe Tmpsalesrep was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpsalesrep with id=" + id
            });
        });
};

// Delete a Tmpsalesrep with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpsalesrep.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpsalesrep was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpsalesrep with id=${id}. Maybe Tmpsalesrep was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpsalesrep with id=" + id
            });
        });
};

// Delete all Tmpsalesrep from the database.
exports.deleteAll = (req, res) => {
    Tmpsalesrep.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpsalesrep were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpsalesrep."
            });
        });
};
