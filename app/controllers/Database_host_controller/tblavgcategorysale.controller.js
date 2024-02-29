const Tblavgcategorysale = require("../../models/Database_host_model/tblavgcategorysale.model");


// Create and Save a new Tblavgcategorysale
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode and StockDescription cannot be empty!" });
        return;
    }

    // Create a Tblavgcategorysale
    const tblavgcategorysale = {
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
        Week1: req.body.Week1,
        Week2: req.body.Week2,
        Week3: req.body.Week3,
        Week4: req.body.Week4,
        Week5: req.body.Week5,
        Week6: req.body.Week6,
        Cost: req.body.Cost,
        Selling: req.body.Selling,
        SOH: req.body.SOH,
        MinStock: req.body.MinStock,
        MaxStock: req.body.MaxStock,
        MajorNo: req.body.MajorNo,
        MajorDescription: req.body.MajorDescription,
        Sub1No: req.body.Sub1No,
        Sub1Description: req.body.Sub1Description,
        Sub3No: req.body.Sub3No,
        Sub3Description: req.body.Sub3Description
    };

    // Save Tblavgcategorysale in the database
    Tblavgcategorysale.create(tblavgcategorysale)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tblavgcategorysale."
            });
        });
};

// Retrieve all Tblavgcategorysale from the database.
exports.findAll = (req, res) => {
    Tblavgcategorysale.findAll()
        .then((tblavgcategorysale) => {
            res.send(tblavgcategorysale);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tblavgcategorysale.",
            });
        });
};

// Find a single Tblavgcategorysale with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tblavgcategorysale.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tblavgcategorysale with id=" + id
            });
        });
};

// Update a Tblavgcategorysale by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tblavgcategorysale.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblavgcategorysale was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tblavgcategorysale with id=${id}. Maybe Tblavgcategorysale was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tblavgcategorysale with id=" + id
            });
        });
};

// Delete a Tblavgcategorysale with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblavgcategorysale.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Tblavgcategorysale was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Tblavgcategorysale with id=${id}. Maybe Tblavgcategorysale was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Tblavgcategorysale with id=" + id,
            });
        });
};

// Delete all Tblavgcategorysale from the database.
exports.deleteAll = (req, res) => {
    Tblavgcategorysale.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tblavgcategorysale were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tblavgcategorysale.",
            });
        });
};
