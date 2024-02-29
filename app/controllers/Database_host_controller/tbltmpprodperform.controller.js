const Tbltmpprodperform = require("../../models/Database_host_model/tbltmpprodperform.modle");


// Create and Save a new Tbltmpprodperform
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockDescription) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create a Tbllivecashier
    const tbltmpprodperform = {
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
        ItemType: req.body.ItemType,
        ItemSize: req.body.ItemSize,
        qauntity: req.body.qauntity,
        tec: req.body.tec,
        location: req.body.location,
        exclsell: req.body.exclsell,
        gpvalue: req.body.gpvalue,
        gpp: req.body.gpp,
        soh: req.body.soh,
        mdept: req.body.mdept,
        sub1: req.body.sub1,
        sub2: req.body.sub2,
        mdeptno: req.body.mdeptno,
        sub1no: req.body.sub1no,
        sub2no: req.body.sub2no,
        InclSelling: req.body.InclSelling,
    };
    // Save Tbllivecashier in the database
    Tbltmpprodperform.create(tbltmpprodperform)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the tbltmpprodperform.",
            });
        });
};

// Retrieve all Tbltmpprodperform from the database.
exports.findAll = (req, res) => {
    const StockDescription = req.query.StockDescription;
    var condition = StockDescription ? { StockDescription: { [Op.like]: `%${StockDescription}%` } } : null;

    Tbltmpprodperform.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbltmpprodperform.",
            });
        });
};

// Find a single Tbltmpprodperform with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbltmpprodperform.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tbltmpprodperform with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tbltmpprodperform with id=" + id,
            });
        });
};

// Update a Tbltmpprodperform by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbltmpprodperform.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpprodperform was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tbltmpprodperform with id=${id}. Maybe Tbltmpprodperform was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tbltmpprodperform with id=" + id,
            });
        });
};

// Delete a Tbltmpprodperform with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbltmpprodperform.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpprodperform was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tbltmpprodperform with id=${id}. Maybe Tbltmpprodperform was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tbltmpprodperform with id=" + id,
            });
        });
};

// Delete all Tbltmpprodperform from the database.
exports.deleteAll = (req, res) => {
    Tbltmpprodperform.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tbltmpprodperforms were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbltmpprodperforms.",
            });
        });
};

// Find all published Tbltmpprodperforms
exports.findAllPublished = (req, res) => {
    Tbltmpprodperform.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbltmpprodperform.",
            });
        });
};
