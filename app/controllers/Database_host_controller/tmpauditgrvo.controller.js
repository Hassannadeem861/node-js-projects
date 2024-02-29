const Tmpauditgrvo = require("../../models/Database_host_model/tmpauditgrvo.modle");


// Create and Save a new Tmpauditgrvo
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.DateTime) {
    //     res.status(400).send({
    //         message: "Content can not be empty!",
    //     });
    //     return;
    // }

    const tmpauditgrvo = {
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

    // Convert to JSON string
    const jsonTmpauditgrvo = JSON.stringify(tmpauditgrvo);

    console.log(jsonTmpauditgrvo);



    // Save Tmpauditgrvo in the database
    Tmpauditgrvo.create(tmpauditgrvo)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpauditgrvo.",
            });
        });
};

// Retrieve all Tmpauditgrvo from the database.
exports.findAll = (req, res) => {
    const InvoiceNumber = req.query.InvoiceNumber;
    var condition = InvoiceNumber ? { InvoiceNumber: { [Op.like]: `%${InvoiceNumber}%` } } : null;

    Tmpauditgrvo.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditgrvo.",
            });
        });
};

// Find a single Tmpauditgrvo with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpauditgrvo.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpauditgrvo with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpauditgrvo with id=" + id,
            });
        });
};

// Update a Tmpauditgrvo by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpauditgrvo.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditgrvo was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpauditgrvo with id=${id}. Maybe Tmpauditgrvo was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpauditgrvo with id=" + id,
            });
        });
};

// Delete a Tmpauditgrvo with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpauditgrvo.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpauditgrvo was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpauditgrvo with id=${id}. Maybe Tmpauditgrvo was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpauditgrvo with id=" + id,
            });
        });
};

// Delete all Tmpauditgrvo from the database.
exports.deleteAll = (req, res) => {
    Tmpauditgrvo.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpauditgrvo were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpauditgrvo.",
            });
        });
};

// Find all published Tmpauditgrvo
exports.findAllPublished = (req, res) => {
    Tmpauditgrvo.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpauditgrvo.",
            });
        });
};
