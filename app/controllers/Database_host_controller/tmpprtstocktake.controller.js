const Tmpprtstocktake = require("../../models/Database_host_model/tmpprtstocktake.model");

// Create and Save a new Tmpprtstocktake
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode || !req.body.Description) {
        res.status(400).send({ message: "StockCode and Description are required fields!" });
        return;
    }

    // Create a Tmpprtstocktake
    const tmpprtstocktake = {
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        SOH: req.body.SOH,
        EnterQty: req.body.EnterQty,
        Costprice: req.body.Costprice,
        SellingPrice: req.body.SellingPrice,
        QtyDiffrence: req.body.QtyDiffrence,
        HisDay: req.body.HisDay,
        HisMonth: req.body.HisMonth,
        HisYear: req.body.HisYear
    };

    // Save Tmpprtstocktake in the database
    Tmpprtstocktake.create(tmpprtstocktake)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmpprtstocktake."
            });
        });
};

// Retrieve all Tmpprtstocktake from the database.
exports.findAll = (req, res) => {
    Tmpprtstocktake.findAll()
        .then(Tmpprtstocktake => {
            res.send(Tmpprtstocktake);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmpprtstocktake."
            });
        });
};

// Find a single Tmpprtstocktake with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpprtstocktake.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpprtstocktake with id=" + id
            });
        });
};

// Update a Tmpprtstocktake by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpprtstocktake.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpprtstocktake was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpprtstocktake with id=${id}. Maybe Tmpprtstocktake was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpprtstocktake with id=" + id
            });
        });
};

// Delete a Tmpprtstocktake with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpprtstocktake.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpprtstocktake was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpprtstocktake with id=${id}. Maybe Tmpprtstocktake was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpprtstocktake with id=" + id
            });
        });
};

// Delete all Tmpprtstocktake from the database.
exports.deleteAll = (req, res) => {
    Tmpprtstocktake.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpprtstocktake were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmpprtstocktake."
            });
        });
};


// Find all published Tmpprtstocktake
exports.findAllPublished = (req, res) => {
    Tmpprtstocktake.findAll({ where: { Published: true } })
        .then(Tmpprtstocktake => {
            res.send(Tmpprtstocktake);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving published Tmpprtstocktake."
            });
        });
};
