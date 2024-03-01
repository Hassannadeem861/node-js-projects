// tmpdeliverydetails.controller.js
const Tmpdeliverydetails = require("../../models/Database_hoststockmaster_model/tmpdeliverydetails.model");


// Create and Save a new tmpdeliverydetails
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({ message: "DateTime can not be empty!" });
        return;
    }

    const tmpdeliverydetails = {
        DateTime: req.body.DateTime,
        SaleNum: req.body.SaleNum,
        Repcode: req.body.Repcode,
        RepName: req.body.RepName,
        InvoiceTExclCost: req.body.InvoiceTExclCost,
        InvoiceTInclCost: req.body.InvoiceTInclCost,
        InvoiceTExclSelling: req.body.InvoiceTExclSelling,
        InvoiceTInclSelling: req.body.InvoiceTInclSelling,
        InvoiceVAT: req.body.InvoiceVAT,
        UserName: req.body.UserName,
        HisDay: req.body.HisDay,
        HisMonth: req.body.HisMonth,
        HisYear: req.body.HisYear,
    };



    // Save TmpdaTmpdeliverydetailsta_salesrep in the database
    Tmpdeliverydetails.create(tmpdeliverydetails)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpdeliverydetails."
            });
        });
};

// Retrieve all Tmpdeliverydetails from the database.
exports.findAll = (req, res) => {
    Tmpdeliverydetails.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpdeliverydetails."
            });
        });
};

// Find a single Tmpdeliverydetails with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpdeliverydetails.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpdeliverydetails with id=" + id
            });
        });
};

// Update a Tmpdeliverydetails by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpdeliverydetails.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpdeliverydetails was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpdeliverydetails with id=${id}. Maybe Tmpdeliverydetails was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpdeliverydetails with id=" + id
            });
        });
};

// Delete a Tmpdeliverydetails with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpdeliverydetails.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpdeliverydetails was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpdeliverydetails with id=${id}. Maybe Tmpdeliverydetails was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpbarcode with id=" + id
            });
        });
};

// Delete all Tmpdeliverydetails from the database.
exports.deleteAll = (req, res) => {
    Tmpdeliverydetails.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpdeliverydetails were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpdeliverydetails."
            });
        });
};
