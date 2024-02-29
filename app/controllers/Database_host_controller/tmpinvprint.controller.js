const Tmpinvprint = require("../../models/Database_host_model/tmpinvprint.model");

// Create and Save a new Tmpinvprint
exports.create = (req, res) => {
    // Validate request
    if (!req.body.stockcode || !req.body.Description) {
        res.status(400).send({ message: "Stockcode and Description are required fields!" });
        return;
    }

    // Create a Tmpinvprint
    const tmpinvprint = {
        stockcode: req.body.stockcode,
        Description: req.body.Description,
        Qty: req.body.Qty,
        UnitPrice: req.body.UnitPrice,
        LineTotal: req.body.LineTotal,
        INVDate: req.body.INVDate,
        VATNUM: req.body.VATNUM,
        TotalLines: req.body.TotalLines,
        TotalWeight: req.body.TotalWeight,
        InvoiceTotal: req.body.InvoiceTotal,
        VAT: req.body.VAT,
        SaleNum: req.body.SaleNum,
        ExclLineTotal: req.body.ExclLineTotal,
        AcctNum: req.body.AcctNum,
        AcctName: req.body.AcctName,
        Address1: req.body.Address1,
        Address2: req.body.Address2,
        Address3: req.body.Address3,
        Comments1: req.body.Comments1,
        Comments2: req.body.Comments2,
        Comments3: req.body.Comments3,
        Comments4: req.body.Comments4,
        ExclUnitPrice: req.body.ExclUnitPrice,
        ExclUnitSuRcharge: req.body.ExclUnitSuRcharge,
        OrderNo: req.body.OrderNo,
        Price: req.body.Price,
        DiscountV: req.body.DiscountV,
        ClerkU: req.body.ClerkU,
        Timet: req.body.Timet,
        Tendered: req.body.Tendered,
        Surcharge1: req.body.Surcharge1,
        Surcharge2: req.body.Surcharge2,
        Surcharge3: req.body.Surcharge3,
        SurchargeAmt1: req.body.SurchargeAmt1,
        SurchargeAmt2: req.body.SurchargeAmt2,
        SurchargeAmt3: req.body.SurchargeAmt3
    };

    // Save Tmpinvprint in the database
    Tmpinvprint.create(tmpinvprint)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tmpinvprint."
            });
        });
};

// Retrieve all Tmpinvprint from the database.
exports.findAll = (req, res) => {
    Tmpinvprint.findAll()
        .then(Tmpinvprint => {
            res.send(Tmpinvprint);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tmpinvprint."
            });
        });
};

// Find a single Tmpinvprint with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tmpinvprint.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tmpinvprint with id=" + id
            });
        });
};

// Find all published Tmpinvprint
exports.findAllPublished = (req, res) => {
    Tmpinvprint.findAll({ where: { Published: true } })
        .then(Tmpinvprint => {
            res.send(Tmpinvprint);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving published Tmpinvprint."
            });
        });
};


// Update a Tmpinvprint by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tmpinvprint.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpinvprint was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tmpinvprint with id=${id}. Maybe Tmpinvprint was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tmpinvprint with id=" + id
            });
        });
};

// Delete a Tmpinvprint with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tmpinvprint.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tmpinvprint was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tmpinvprint with id=${id}. Maybe Tmpinvprint was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tmpinvprint with id=" + id
            });
        });
};

// Delete all Tmpinvprint from the database.
exports.deleteAll = (req, res) => {
    Tmpinvprint.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tmpinvprint were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tmpinvprint."
            });
        });
};
