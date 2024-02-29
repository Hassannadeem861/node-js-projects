const Tbltmpstocktake = require("../../models/Database_host_model/tbltmpstocktake.modle");


// Create and Save a new Tbltmpstocktake
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockBarcode) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const tbltmpstocktakeData = {
        StockCode: req.body.StockCode,
        StockBarcode: req.body.StockBarcode,
        Description: req.body.Description,
        SOH: req.body.SOH,
        StockCount: req.body.StockCount,
        S_NO: req.body.S_NO,
    };
    // Save Tbltmpstocktake in the database
    Tbltmpstocktake.create(tbltmpstocktakeData)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbltmpstocktake.",
            });
        });
};

// Retrieve all Tbltmpstocktake from the database.
exports.findAll = (req, res) => {
    const StockBarcode = req.query.StockBarcode;
    var condition = StockBarcode ? { StockBarcode: { [Op.like]: `%${StockBarcode}%` } } : null;

    Tbltmpstocktake.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbltmpstocktake.",
            });
        });
};

// Find a single Tbltmpstocktake with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbltmpstocktake.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tbltmpstocktake with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tbltmpstocktake with id=" + id,
            });
        });
};

// Update a Tbltmpstocktake by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbltmpstocktake.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpstocktake was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Tbltmpstocktake with id=${id}. Maybe Tbltmpstocktake was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Tbltmpstocktake with id=" + id,
            });
        });
};

// Delete a Tbltmpstocktake with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbltmpstocktake.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tbltmpstocktake was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tbltmpstocktake with id=${id}. Maybe Tbltmpstocktake was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tbltmpstocktake with id=" + id,
            });
        });
};

// Delete all Tbltmpstocktake from the database.
exports.deleteAll = (req, res) => {
    Tbltmpstocktake.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tbltmpstocktakes were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbltmpstocktakes.",
            });
        });
};

// Find all published Tbltmpstocktake
exports.findAllPublished = (req, res) => {
    Tbltmpstocktake.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbltmpstocktake.",
            });
        });
};
