const Tmpcombineditems = require("../../models/Database_host_model/tmpcombineditems.modle");


// Create and Save a new Tmpcombineditems
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const tmpCombinedItem = {
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        combStockCode: req.body.combStockCode,
        combStockDescription: req.body.combStockDescription,
        OriginalQuantity: req.body.OriginalQuantity,
        Qtytomake: req.body.Qtytomake,
        CalculatedQty: req.body.CalculatedQty,
    };
    // Save Tmpcombineditems in the database
    Tmpcombineditems.create(tmpCombinedItem)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tmpcombineditems.",
            });
        });
};

// Retrieve all Tmpcombineditems from the database.
exports.findAll = (req, res) => {
    const StockCode = req.query.StockCode;
    var condition = StockCode ? { StockCode: { [Op.like]: `%${StockCode}%` } } : null;

    Tmpcombineditems.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpcombineditems.",
            });
        });
};

// Find a single Tmpcombineditems with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpcombineditems.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tmpcombineditems with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tmpcombineditems with id=" + id,
            });
        });
};

// Update a Tmpcombineditems by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpcombineditems.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpcombineditems was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tmpcombineditems with id=${id}. Maybe Tmpcombineditems was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tmpcombineditems with id=" + id,
            });
        });
};

// Delete a Tmpcombineditems with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpcombineditems.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tmpcombineditems was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpcombineditems with id=${id}. Maybe Tmpcombineditems was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tmpcombineditems with id=" + id,
            });
        });
};

// Delete all Tmpcombineditems from the database.
exports.deleteAll = (req, res) => {
    Tmpcombineditems.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tmpcombineditemss were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tmpcombineditemss.",
            });
        });
};

// Find all published Tmpcombineditems
exports.findAllPublished = (req, res) => {
    Tmpcombineditems.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tmpcombineditems.",
            });
        });
};
