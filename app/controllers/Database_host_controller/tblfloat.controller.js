const Tblfloat = require("../../models/Database_host_model/tblfloat.model");


// Create and Save a new Tblfloat
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tblfloat`
    const tblfloat = {
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
        StockTakeNo: req.body.StockTakeNo,
    };

    // Save Tblfloat in the database
    Tblfloat.create(tblfloat)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tblfloat."
            });
        });
};

// Retrieve all Tblfloats from the database.
exports.findAll = (req, res) => {
    Tblfloat.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tblfloat."
            });
        });
};

// Find a single Tblfloat with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tblfloat.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tblfloat with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tblfloat with id=" + id
            });
        });
};

// Update a Tblfloat by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tblfloat.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblfloat was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tblfloat with id=${id}. Maybe Tblfloat was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tblfloat with id=" + id
            });
        });
};

// Delete a Tblfloat with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tblfloat.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tblfloat was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tblfloat with id=${id}. Maybe Tblfloat was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tblfloat with id=" + id
            });
        });
};

// Delete all Tblfloats from the database.
exports.deleteAll = (req, res) => {
    Tblfloat.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tblfloats were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tblfloat."
            });
        });
};
