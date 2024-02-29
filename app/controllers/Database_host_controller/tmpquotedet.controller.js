const Tmpquotedet = require("../../models/Database_host_model/tmpquotedet.model");

// Create and Save a new Tmpquotedet
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode || !req.body.StockDescription) {
        res.status(400).send({ message: "StockCode and StockDescription are required fields!" });
        return;
    }

    // Create a Tmpquotedet
    const tmpquotedet = {
        DateTime: req.body.DateTime,
        QuoteNum: req.body.QuoteNum,
        tRANSACTIONnO: req.body.tRANSACTIONnO,
        StockCode: req.body.StockCode,
        StockDescription: req.body.StockDescription,
        QtyonQuote: req.body.QtyonQuote,
        StockUnitPrice: req.body.StockUnitPrice,
        VatAmount: req.body.VatAmount,
        LineTotal: req.body.LineTotal,
        QuoteTotal: req.body.QuoteTotal,
        UserName: req.body.UserName,
        hisYear: req.body.hisYear,
        hisMonth: req.body.hisMonth,
        hisDay: req.body.hisDay,
        CustomerCode: req.body.CustomerCode,
        VATP: req.body.VATP,
        ExclLineTotal: req.body.ExclLineTotal,
        lastcost: req.body.lastcost,
        averagecost: req.body.averagecost,
        majorno: req.body.majorno,
        sub1no: req.body.sub1no,
        sub2no: req.body.sub2no
    };

    // Save Tmpquotedet in the database
    Tmpquotedet.create(tmpquotedet)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmpquotedet."
            });
        });
};

// Retrieve all Tmpquotedet from the database.
exports.findAll = (req, res) => {
    Tmpquotedet.findAll()
        .then(Tmpquotedet => {
            res.send(Tmpquotedet);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmpquotedet."
            });
        });
};

// Find a single Tmpquotedet with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpquotedet.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpquotedet with id=" + id
            });
        });
};

// Update a Tmpquotedet by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpquotedet.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpquotedet was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpquotedet with id=${id}. Maybe Tmpquotedet was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpquotedet with id=" + id
            });
        });
};

// Delete a Tmpquotedet with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpquotedet.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpquotedet was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpquotedet with id=${id}. Maybe Tmpquotedet was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpquotedet with id=" + id
            });
        });
};

// Delete all Tmpquotedet from the database.
exports.deleteAll = (req, res) => {
    Tmpquotedet.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpquotedet were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmpquotedet."
            });
        });
};


// Find all published Tmpquotedet
exports.findAllPublished = (req, res) => {
    Tmpquotedet.findAll({ where: { Published: true } })
        .then(Tmpquotedet => {
            res.send(Tmpquotedet);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving published Tmpquotedet."
            });
        });
};
