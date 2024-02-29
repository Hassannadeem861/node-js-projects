// tbl_ibt_products_update.controller.js
const Tbl_ibt_products_update = require("../../models/Database_hoststockmaster_model/tbl_ibt_products_update.model");


// Create and Save a new Tbl_ibt_products_update
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockonHand) {
        res.status(400).send({ message: "StockonHand can not be empty!" });
        return;
    }


    const tbl_ibt_products_update = {
        StockCode: req.body.StockCode,
        StockBarCode: req.body.StockBarCode,
        Description1: req.body.Description1,
        Description2: req.body.Description2,
        ItemComment: req.body.ItemComment,
        MajorNo: req.body.MajorNo,
        Sub1No: req.body.Sub1No,
        Sub2No: req.body.Sub2No,
        StockonHand: req.body.StockonHand,
        DiscQty: req.body.DiscQty,
        MinStock: req.body.MinStock,
        Maxstock: req.body.Maxstock,
        StockOnOrder: req.body.StockOnOrder,
        MaximumDiscount: req.body.MaximumDiscount,
        AvarageCostPrice: req.body.AvarageCostPrice,
        LastCostPrice: req.body.LastCostPrice,
        VatPercentage: req.body.VatPercentage,
        DefaultSellingPrice: req.body.DefaultSellingPrice,
        LaybyeStock: req.body.LaybyeStock,
        AskPC: req.body.AskPC,
        AskDC: req.body.AskDC,
        Picture: req.body.Picture,
        SerialItem: req.body.SerialItem,
        NettCost: req.body.NettCost,
        StoreLocationName: req.body.StoreLocationName,
        StoreLocationODBC: req.body.StoreLocationODBC,
        StoreMainName: req.body.StoreMainName,
        StoreMainODBC: req.body.StoreMainODBC,
        Status: req.body.Status,
    };

    // Save Tbl_ibt_products_update in the database
    Tbl_ibt_products_update.create(tbl_ibt_products_update)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_products_update."
            });
        });
};

// Retrieve all Tbl_ibt_products_update from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_products_update.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_products_update."
            });
        });
};

// Find a single Tbl_ibt_products_update with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_products_update.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_products_update with id=" + id
            });
        });
};

// Update a Tbl_ibt_products_update by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_products_update.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_products_update was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_products_update with id=${id}. Maybe Tbl_ibt_products_update was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_products_update with id=" + id
            });
        });
};

// Delete a Tbl_ibt_products_update with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_products_update.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_products_update was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_products_update with id=${id}. Maybe Tbl_ibt_products_update was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_products_update with id=" + id
            });
        });
};

// Delete all Tbl_ibt_products_update from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_products_update.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_products_update were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_products_update."
            });
        });
};
