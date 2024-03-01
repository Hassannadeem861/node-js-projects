// tmpdailyinv.controller.js
const Tmpdailyinv = require("../../models/Database_hoststockmaster_model/tmpdailyinv.model");


// Create and Save a new Tmpdailyinv
exports.create = (req, res) => {
    // Validate request
    if (!req.body.SaleNum) {
        res.status(400).send({ message: "SaleNum can not be empty!" });
        return;
    }

    const tmpdailyinv = {
        Date: req.body.Date,
        SaleNum: req.body.SaleNum,
        AuditNum: req.body.AuditNum,
        VAT: req.body.VAT,
        Total: req.body.Total,
        PaymentType: req.body.PaymentType,
        AccountNum: req.body.AccountNum,
        ExternalOrderNum: req.body.ExternalOrderNum,
        ClerkName: req.body.ClerkName,
    };



    // Save Tmpdailyinv in the database
    Tmpdailyinv.create(tmpdailyinv)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpdailyinv."
            });
        });
};

// Retrieve all Tmpdailyinv from the database.
exports.findAll = (req, res) => {
    Tmpdailyinv.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpdailyinv."
            });
        });
};

// Find a single Tmpdailyinv with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpdailyinv.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpdailyinv with id=" + id
            });
        });
};

// Update a Tmpdailyinv by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpdailyinv.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpdailyinv was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpdailyinv with id=${id}. Maybe Tmpdailyinv was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpdailyinv with id=" + id
            });
        });
};

// Delete a Tmpdailyinv with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpdailyinv.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpdailyinv was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpdailyinv with id=${id}. Maybe Tmpdailyinv was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpdailyinv with id=" + id
            });
        });
};

// Delete all Tmpdailyinv from the database.
exports.deleteAll = (req, res) => {
    Tmpdailyinv.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpdailyinv were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpdailyinv."
            });
        });
};
