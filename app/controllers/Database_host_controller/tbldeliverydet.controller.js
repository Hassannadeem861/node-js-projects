const Tbldeliverydet = require("../../models/Database_host_model/tbldeliverydet.model");


// Create and save a new record
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode and Description cannot be empty!" });
        return;
    }

    // Create a Tbldeliverydet object
    const tbldeliverydet = {
        DateTime: req.body.DateTime,
        invoiceNo: req.body.invoiceNo,
        DelNo: req.body.DelNo,
        LineNo: req.body.LineNo,
        StockCode: req.body.StockCode,
        Description: req.body.Description,
        SoldQty: req.body.SoldQty,
        DelQty: req.body.DelQty,
        DispatchQty: req.body.DispatchQty,
        BalanceQty: req.body.BalanceQty,
        DoneBy: req.body.DoneBy
    };

    // Save Tbldeliverydet in the database
    Tbldeliverydet.create(tbldeliverydet)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tbldeliverydet."
            });
        });
};

// Retrieve all records from the database
exports.findAll = (req, res) => {
    Tbldeliverydet.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tbldeliverydet records."
            });
        });
};

// Find a single record with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbldeliverydet.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbldeliverydet with id=" + id
            });
        });
};

// Update a record by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbldeliverydet.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Tbldeliverydet was updated successfully." });
            } else {
                res.send({
                    message: `Cannot update Tbldeliverydet with id=${id}. Maybe Tbldeliverydet was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error updating Tbldeliverydet with id=" + id });
        });
};

// Delete a record with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbldeliverydet.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Tbldeliverydet was deleted successfully!" });
            } else {
                res.send({
                    message: `Cannot delete Tbldeliverydet with id=${id}. Maybe Tbldeliverydet was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Could not delete Tbldeliverydet with id=" + id });
        });
};

// Delete all records from the database
exports.deleteAll = (req, res) => {
    Tbldeliverydet.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbldeliverydet records were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all Tbldeliverydet records."
            });
        });
};
