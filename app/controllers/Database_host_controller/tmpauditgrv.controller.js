const Tmpauditgrv = require("../../models/Database_host_model/tmpauditgrv.modle");


// Create and Save a new Tmpauditgrv
exports.create = (req, res) => {
    // Validate request
    if (!req.body.InvoiceNumber) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const tmpauditgrv = {
        DateTime: req.body.DateTime,
        InvoiceNumber: req.body.InvoiceNumber,
        TransactionNumber: req.body.TransactionNumber,
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        QuantityReceived: req.body.QuantityReceived,
        ExclusiveUnitCost: req.body.ExclusiveUnitCost,
        InclusiveUnitCost: req.body.InclusiveUnitCost,
        Markup: req.body.Markup,
        ExclusiveSelling: req.body.ExclusiveSelling,
        InclusiveSelling: req.body.InclusiveSelling,
        VATPercentage: req.body.VATPercentage,
        LineTotal: req.body.LineTotal,
        GRVNum: req.body.GRVNum,
        Subtotal: req.body.Subtotal,
        VAT: req.body.VAT,
        SupplierCode: req.body.SupplierCode,
        User: req.body.User,
        hisYear: req.body.hisYear,
        hisMonth: req.body.hisMonth,
        hisDay: req.body.hisDay,
    };


    // Save Tmpauditgrv in the database
    Tmpauditgrv.create(tmpauditgrv)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpauditgrv.",
            });
        });
};

// Retrieve all Tmpauditgrv from the database.
exports.findAll = (req, res) => {
    const InvoiceNumber = req.query.InvoiceNumber;
    var condition = InvoiceNumber ? { InvoiceNumber: { [Op.like]: `%${InvoiceNumber}%` } } : null;

    Tmpauditgrv.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditgrv.",
            });
        });
};

// Find a single Tmpauditgrv with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpauditgrv.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpauditgrv with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpauditgrv with id=" + id,
            });
        });
};

// Update a Tmpauditgrv by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpauditgrv.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditgrv was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpauditgrv with id=${id}. Maybe Tmpauditgrv was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpauditgrv with id=" + id,
            });
        });
};

// Delete a Tmpauditgrv with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpauditgrv.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditgrv was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpauditgrv with id=${id}. Maybe Tmpauditgrv was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpauditgrv with id=" + id,
            });
        });
};

// Delete all Tmpauditgrv from the database.
exports.deleteAll = (req, res) => {
    Tmpauditgrv.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpauditgrv were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpauditgrv.",
            });
        });
};

// Find all published Tmpauditgrv
exports.findAllPublished = (req, res) => {
    Tmpauditgrv.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditgrv.",
            });
        });
};
