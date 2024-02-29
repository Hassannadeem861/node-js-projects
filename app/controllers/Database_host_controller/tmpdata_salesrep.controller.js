const Tmpdata_salesrep = require("../../models/Database_host_model/tmpdata_salesrep.modle");


// Create and Save a new Tmpdata_salesrep
exports.create = (req, res) => {
    // Validate request
    if (!req.body.DateTime) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    const tmpDataSalesRep = {
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

    // Save Tmpdata_salesrep in the database
    Tmpdata_salesrep.create(tmpDataSalesRep)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpdata_salesrep.",
            });
        });
};

// Retrieve all Tmpdata_salesrep from the database.
exports.findAll = (req, res) => {
    const SaleNum = req.query.SaleNum;
    var condition = SaleNum ? { SaleNum: { [Op.like]: `%${SaleNum}%` } } : null;

    Tmpdata_salesrep.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpdata_salesrep.",
            });
        });
};

// Find a single Tmpdata_salesrep with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpdata_salesrep.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpdata_salesrep with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpdata_salesrep with id=" + id,
            });
        });
};

// Update a Tmpdata_salesrep by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpdata_salesrep.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpdata_salesrep was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpdata_salesrep with id=${id}. Maybe Tmpdata_salesrep was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpdata_salesrep with id=" + id,
            });
        });
};

// Delete a Tmpdata_salesrep with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpdata_salesrep.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpdata_salesrep was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpdata_salesrep with id=${id}. Maybe Tmpdata_salesrep was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpdata_salesrep with id=" + id,
            });
        });
};

// Delete all Tmpdata_salesrep from the database.
exports.deleteAll = (req, res) => {
    Tmpdata_salesrep.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpdata_salesrep were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpdata_salesrep.",
            });
        });
};

// Find all published Tmpdata_salesrep
exports.findAllPublished = (req, res) => {
    Tmpdata_salesrep.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpdata_salesrep.",
            });
        });
};
