const Tmpauditorderprint = require("../../models/Database_host_model/tmpauditorderprint.modle");


// Create and Save a new Tmpauditorderprint
exports.create = (req, res) => {
    // Validate request
    if (!req.body.TransactionNumber) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const createdTmpAuditOrderPrint = {
        DateTime: req.body.DateTime,
        InvoiceNumber: req.body.InvoiceNumber,
        TransactionNumber: req.body.TransactionNumber,
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        QuantityReceived: req.body.QuantityReceived,
        SOH: req.body.SOH,
        ExclusiveUnitCost: req.body.ExclusiveUnitCost,
        InclusiveUnitCost: req.body.InclusiveUnitCost,
        Disc1: req.body.Disc1,
        Disc2: req.body.Disc2,
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
    Tmpauditorderprint.create(createdTmpAuditOrderPrint)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpauditorderprint.",
            });
        });
};

// Retrieve all Tmpauditorderprint from the database.
exports.findAll = (req, res) => {
    const Description = req.query.Description;
    var condition = Description ? { Description: { [Op.like]: `%${Description}%` } } : null;

    Tmpauditorderprint.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditorderprint.",
            });
        });
};

// Find a single Tmpauditorderprint with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpauditorderprint.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpauditorderprint with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpauditorderprint with id=" + id,
            });
        });
};

// Update a Tmpauditorderprint by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpauditorderprint.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditorderprint was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpauditorderprint with id=${id}. Maybe Tmpauditorderprint was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpauditorderprint with id=" + id,
            });
        });
};

// Delete a Tmpauditorderprint with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpauditorderprint.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditorderprint was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpauditorderprint with id=${id}. Maybe Tmpauditorderprint was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpauditorderprint with id=" + id,
            });
        });
};

// Delete all Tmpauditorderprint from the database.
exports.deleteAll = (req, res) => {
    Tmpauditorderprint.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpauditorderprints were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpauditorderprints.",
            });
        });
};

// Find all published Tmpauditorderprint
exports.findAllPublished = (req, res) => {
    Tmpauditorderprint.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditorderprint.",
            });
        });
};
