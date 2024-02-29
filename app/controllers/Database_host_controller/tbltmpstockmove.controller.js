const Tbltmpstockmove = require("../../models/Database_host_model/tbltmpstockmove.modle");


// Create and Save a new Tbltmpstockmove
exports.create = (req, res) => {
    // Validate request
    if (!req.body.majorno) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create a Tbllivecashier
    const tbltmpstockmoveData = {
        datetime: req.body.datetime,
        stockcode: req.body.stockcode,
        majorno: req.body.stockdescription,
        majorno: req.body.majorno,
        sub1no: req.body.sub1no,
        sub2no: req.body.sub2no,
        openqty: req.body.openqty,
        closeQty: req.body.closeQty,
        soldQty: req.body.soldQty,
        receivedqty: req.body.receivedqty,
        adjustedQty: req.body.adjustedQty,
        stocktakediffQty: req.body.stocktakediffQty,
        usedincombinedQty: req.body.usedincombinedQty,
        soldtotalexclselling: req.body.soldtotalexclselling,
        soldtotalcost: req.body.soldtotalcost,
        rectotalexclselling: req.body.rectotalexclselling,
        rectotalcost: req.body.rectotalcost,
        Hisday: req.body.Hisday,
        HisMonth: req.body.HisMonth,
        Hisyear: req.body.Hisyear,
    };
    // Save Tbllivecashier in the database
    Tbltmpstockmove.create(tbltmpstockmoveData)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbltmpstockmove.",
            });
        });
};

// Retrieve all Tbltmpstockmove from the database.
exports.findAll = (req, res) => {
    const majorno = req.query.majorno;
    var condition = majorno ? { majorno: { [Op.like]: `%${majorno}%` } } : null;

    Tbltmpstockmove.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbltmpstockmove.",
            });
        });
};

// Find a single Tbltmpstockmove with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbltmpstockmove.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tbltmpstockmove with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tbltmpstockmove with id=" + id,
            });
        });
};

// Update a Tbltmpstockmove by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbltmpstockmove.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpstockmove was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tbltmpstockmove with id=${id}. Maybe Tbltmpstockmove was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tbltmpstockmove with id=" + id,
            });
        });
};

// Delete a Tbltmpstockmove with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbltmpstockmove.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpstockmove was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tbltmpstockmove with id=${id}. Maybe Tbltmpstockmove was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tbltmpstockmove with id=" + id,
            });
        });
};

// Delete all Tbltmpstockmove from the database.
exports.deleteAll = (req, res) => {
    Tbltmpstockmove.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tbltmpstockmoves were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbltmpstockmoves.",
            });
        });
};

// Find all published Tbltmpstockmove
exports.findAllPublished = (req, res) => {
    Tbltmpstockmove.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbltmpstockmove.",
            });
        });
};
