const Tbltmpprodperform1 = require("../../models/Database_host_model/tbltmpprodperform1.modle");


// Create and Save a new Tbltmpprodperform1
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockDescription) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create a Tbllivecashier
    const tbltmpprodperform1 = {
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
        Quantity: req.body.Quantity,
        TEC: req.body.TEC,
        Location: req.body.Location,
        ExclSell: req.body.ExclSell,
        location: req.body.location,
        exclsell: req.body.exclsell,
        GPValue: req.body.GPValue,
        GPP: req.body.GPP,
        SOH: req.body.SOH,
        MDept: req.body.MDept,
        Sub1: req.body.Sub1,
        sub2: req.body.sub2,
        MdeptNo: req.body.MdeptNo,
        Sub1No: req.body.Sub1No,
        Sub2No: req.body.Sub2No,

    };
    // Save Tbllivecashier in the database
    Tbltmpprodperform1.create(tbltmpprodperform1)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbltmpprodperform1.",
            });
        });
};

// Retrieve all Tbltmpprodperform1 from the database.
exports.findAll = (req, res) => {
    const StockDescription = req.query.StockDescription;
    var condition = StockDescription ? { StockDescription: { [Op.like]: `%${StockDescription}%` } } : null;

    Tbltmpprodperform1.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbltmpprodperform1.",
            });
        });
};

// Find a single Tbltmpprodperform1 with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbltmpprodperform1.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tbltmpprodperform1 with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tbltmpprodperform1 with id=" + id,
            });
        });
};

// Update a Tbltmpprodperform1 by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbltmpprodperform1.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpprodperform1 was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tbltmpprodperform1 with id=${id}. Maybe Tbltmpprodperform1 was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tbltmpprodperform1 with id=" + id,
            });
        });
};

// Delete a Tbltmpprodperform1 with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbltmpprodperform1.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpprodperform1 was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tbltmpprodperform1 with id=${id}. Maybe Tbltmpprodperform1 was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tbltmpprodperform1 with id=" + id,
            });
        });
};

// Delete all Tbltmpprodperform1 from the database.
exports.deleteAll = (req, res) => {
    Tbltmpprodperform1.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tbltmpprodperform1s were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbltmpprodperform1s.",
            });
        });
};

// Find all published Tbltmpprodperform1
exports.findAllPublished = (req, res) => {
    Tbltmpprodperform1.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbltmpprodperform1.",
            });
        });
};
