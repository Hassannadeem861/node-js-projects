const Tmpauditgrvprint = require("../../models/Database_host_model/tmpauditgrvprint.modle");


// Create and Save a new Tmpauditgrvprint
exports.create = (req, res) => {
    // Validate request
    if (!req.body.TransactionNumber) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const tmpAuditGrvPrintData = {
        DateTime: req.body.DateTime,
        InvoiceNumber: req.body.InvoiceNumber,
        TransactionNumber: req.body.TransactionNumber,
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        QuantityReceived: req.body.QuantityReceived,
        ExclusiveUnitCost: req.body.ExclusiveUnitCost,
        InclusiveUnitCost: req.body.InclusiveUnitCost,
        Disc1: req.body.Disc1,
        Disc2: req.body.Disc2,
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

    // Save Tmpauditgrvprint in the database
    Tmpauditgrvprint.create(tmpAuditGrvPrintData)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpauditgrvprint.",
            });
        });
};

// Retrieve all Tmpauditgrvprint from the database.
exports.findAll = (req, res) => {
    const Description = req.query.Description;
    var condition = Description ? { Description: { [Op.like]: `%${Description}%` } } : null;

    Tmpauditgrvprint.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditgrvprint.",
            });
        });
};

// Find a single Tmpauditgrvprint with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpauditgrvprint.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpauditgrvprint with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpauditgrvprint with id=" + id,
            });
        });
};

// Update a Tmpauditgrvprint by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpauditgrvprint.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditgrvprint was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpauditgrvprint with id=${id}. Maybe Tmpauditgrvprint was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpauditgrvprint with id=" + id,
            });
        });
};

// Delete a Tmpauditgrvprint with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpauditgrvprint.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditgrvprint was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpauditgrvprint with id=${id}. Maybe Tmpauditgrvprint was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpauditgrvprint with id=" + id,
            });
        });
};

// Delete all Tmpauditgrvprint from the database.
exports.deleteAll = (req, res) => {
    Tmpauditgrvprint.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpauditgrvprints were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpauditgrvprints.",
            });
        });
};

// Find all published Tmpauditgrvprint
exports.findAllPublished = (req, res) => {
    Tmpauditgrvprint.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditgrvprint.",
            });
        });
};
