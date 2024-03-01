// tmptransport.controller.js
const Tmptransport = require("../../models/Database_hoststockmaster_model/tmptransport.model");


// Create and Save a new tmptransport
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Transport_Amount) {
        res.status(400).send({ message: "Transport_Amount can not be empty!" });
        return;
    }

    const tmptransport = {
        Transport_Amount: req.body.Transport_Amount,
        Transport_Description: req.body.Transport_Description,
        Transport_KM: req.body.Transport_KM,
        Comments: req.body.Comments,
        ComputerName: req.body.ComputerName,
        HisYear: req.body.HisYear,
        HisMonth: req.body.HisMonth,
        HisDay: req.body.HisDay,
    };




    // Save tmptransport in the database
    Tmptransport.create(tmptransport)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmptransport."
            });
        });
};

// Retrieve all Tmptransport from the database.
exports.findAll = (req, res) => {
    Tmptransport.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmptransport."
            });
        });
};

// Find a single Tmptransport with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmptransport.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmptransport with id=" + id
            });
        });
};

// Update a Tmptransport by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmptransport.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmptransport was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmptransport with id=${id}. Maybe Tmptransport was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmptransport with id=" + id
            });
        });
};

// Delete a Tmptransport with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmptransport.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmptransport was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmptransport with id=${id}. Maybe Tmptransport was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmptransport with id=" + id
            });
        });
};

// Delete all Tmptransport from the database.
exports.deleteAll = (req, res) => {
    Tmptransport.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmptransport were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmptransport."
            });
        });
};
