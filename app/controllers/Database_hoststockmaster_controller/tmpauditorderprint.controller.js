// tmpauditorderprint.controller.js
const Tmpauditorderprint = require("../../models/Database_hoststockmaster_model/tmpauditorderprint.model");


// Create and Save a new Tmpauditorderprint
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({ message: "DateTime can not be empty!" });
        return;
    }


    const tmpAuditOrderPrintData = {
        DateTime: req.body.DateTime,
        InvoiceNumber: req.body.InvoiceNumber,
        TransactionNumber: req.body.TransactionNumber,
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        QuantityReceived: req.body.QuantityReceived,
        SOH: req.body.SOH,
        ExclusiveUnitCost: req.body.ExclusiveUnitCost,
        InclusiveUnitCost: req.body.InclusiveUnitCost,
        Markup: req.body.Markup,
        ExclusiveSelling: req.body.ExclusiveSelling,
        InclusiveSelling: req.body.InclusiveSelling,
        VATPercentage: req.body.VATPercentage,
        LineTotal: req.body.LineTotal,
        OrderNum: req.body.OrderNum,
        Subtotal: req.body.Subtotal,
        VAT: req.body.VAT,
        SupplierCode: req.body.SupplierCode,
        User: req.body.User,
        hisYear: req.body.hisYear,
        hisMonth: req.body.hisMonth,
        hisDay: req.body.hisDay,
    };

    // Save Tmpauditorderprint in the database
    Tmpauditorderprint.create(tmpAuditOrderPrintData)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpauditorderprint."
            });
        });
};

// Retrieve all Tmpauditorderprint from the database.
exports.findAll = (req, res) => {
    Tmpauditorderprint.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditorderprint."
            });
        });
};

// Find a single Tmpauditorderprint with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpauditorderprint.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpauditorderprint with id=" + id
            });
        });
};

// Update a Tmpauditorderprint by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpauditorderprint.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditorderprint was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpauditorderprint with id=${id}. Maybe Tmpauditorderprint was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpauditorderprint with id=" + id
            });
        });
};

// Delete a Tmpauditorderprint with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpauditorderprint.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditorderprint was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpauditorderprint with id=${id}. Maybe Tmpauditorderprint was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpauditorderprint with id=" + id
            });
        });
};

// Delete all Tmpauditorderprint from the database.
exports.deleteAll = (req, res) => {
    Tmpauditorderprint.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpauditorderprint were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpauditorderprint."
            });
        });
};
