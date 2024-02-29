// tmpauditorder.controller.js
const Tmpauditorder = require("../../models/Database_hoststockmaster_model/tmpauditorder.model");


// Create and Save a new Tmpauditorder
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({ message: "DateTime can not be empty!" });
        return;
    }


    const tmpAuditOrder = {
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


    // Save Tmpauditorder in the database
    Tmpauditorder.create(tmpAuditOrder)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpauditorder."
            });
        });
};

// Retrieve all Tmpauditorder from the database.
exports.findAll = (req, res) => {
    Tmpauditorder.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditorder."
            });
        });
};

// Find a single Tmpauditorder with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpauditorder.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpauditorder with id=" + id
            });
        });
};

// Update a Tmpauditorder by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpauditorder.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditorder was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpauditorder with id=${id}. Maybe Tmpauditorder was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpauditorder with id=" + id
            });
        });
};

// Delete a Tmpauditorder with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpauditorder.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditorder was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpauditorder with id=${id}. Maybe Tmpauditorder was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpauditorder with id=" + id
            });
        });
};

// Delete all Tmpauditorder from the database.
exports.deleteAll = (req, res) => {
    Tmpauditorder.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpauditorder were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpauditorder."
            });
        });
};
