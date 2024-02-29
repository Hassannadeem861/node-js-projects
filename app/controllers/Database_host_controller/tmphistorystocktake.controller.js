const Tmphistorystocktake = require("../../models/Database_host_model/tmphistorystocktake.model");

// Create and Save a new Tmphistorystocktake
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode and Description are required fields!" });
        return;
    }

    // Create a Tmphistorystocktake
    const tmphistorystocktake = {
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        SOH: req.body.SOH,
        EnterQty: req.body.EnterQty,
        Costprice: req.body.Costprice,
        SellingPrice: req.body.SellingPrice,
        QtyDiffrence: req.body.QtyDiffrence,
        HisDay: req.body.HisDay,
        HisMonth: req.body.HisMonth,
        HisYear: req.body.HisYear,
        StockTakeNo: req.body.StockTakeNo
    };

    // Save Tmphistorystocktake in the database
    Tmphistorystocktake.create(tmphistorystocktake)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmphistorystocktake."
            });
        });
};

// Retrieve all Tmphistorystocktake from the database.
exports.findAll = (req, res) => {
    Tmphistorystocktake.findAll()
        .then(Tmphistorystocktake => {
            res.send(Tmphistorystocktake);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmphistorystocktake."
            });
        });
};

// Find a single Tmphistorystocktake with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmphistorystocktake.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmphistorystocktake with id=" + id
            });
        });
};

// Find all published Tmphistorystocktake
exports.findAllPublished = (req, res) => {
    Tmphistorystocktake.findAll({ where: { Published: true } })
        .then(Tmphistorystocktake => {
            res.send(Tmphistorystocktake);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving published Tmphistorystocktake."
            });
        });
};

// Update a Tmphistorystocktake by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmphistorystocktake.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmphistorystocktake was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmphistorystocktake with id=${id}. Maybe Tmphistorystocktake was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmphistorystocktake with id=" + id
            });
        });
};

// Delete a Tmphistorystocktake with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmphistorystocktake.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmphistorystocktake was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmphistorystocktake with id=${id}. Maybe Tmphistorystocktake was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmphistorystocktake with id=" + id
            });
        });
};

// Delete all Tmphistorystocktake from the database.
exports.deleteAll = (req, res) => {
    Tmphistorystocktake.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmphistorystocktake were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmphistorystocktake."
            });
        });
};
