// tbl_ibt_product_details.controller.js
const Tbl_ibt_product_details = require("../../models/Database_hoststockmaster_model/tbl_ibt_product_details.model");


// Create and Save a new Tbl_ibt_product_details
exports.create = (req, res) => {
    // Validate request
    if (!req.body.StockCode) {
        res.status(400).send({ message: "StockCode can not be empty!" });
        return;
    }


    const tbl_ibt_product_details = {
        StockCode: req.body.StockCode,
        ProductType: req.body.ProductType,
        LinkCode: req.body.LinkCode,
        LinkDescription: req.body.LinkDescription,
        UnitsQty: req.body.UnitsQty,
        UnitDescription: req.body.UnitDescription,
        PackWeight: req.body.PackWeight,
        PackWeightDescription: req.body.PackWeightDescription,
        PriceCalculation: req.body.PriceCalculation,
        ScaleItem: req.body.ScaleItem,
        FractionsAllowed: req.body.FractionsAllowed,
        NONGrossProfit: req.body.NONGrossProfit,
        EnterNewDescription: req.body.EnterNewDescription,
        SQItem: req.body.SQItem,
        OverCounter: req.body.OverCounter,
        CombinedItem: req.body.CombinedItem,
        VatFlag: req.body.VatFlag,
        ProductDiscount: req.body.ProductDiscount,
        DS860: req.body.DS860,
        SubTotalCharge: req.body.SubTotalCharge,
        FixedPriceScaleItem: req.body.FixedPriceScaleItem,
        LabelItem: req.body.LabelItem,
        NonGPItem: req.body.NonGPItem,
        SPTerms: req.body.SPTerms,
        SpecialFooter: req.body.SpecialFooter,
        StoreLocationName: req.body.StoreLocationName,
        StoreLocationODBC: req.body.StoreLocationODBC,
        StoreMainName: req.body.StoreMainName,
        StoreMainODBC: req.body.StoreMainODBC,
        Status: req.body.Status,
    };


    // Save Tbl_ibt_product_details in the database
    Tbl_ibt_product_details.create(tbl_ibt_product_details)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tbl_ibt_product_details."
            });
        });
};

// Retrieve all Tbl_ibt_product_details from the database.
exports.findAll = (req, res) => {
    Tbl_ibt_product_details.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tbl_ibt_product_details."
            });
        });
};

// Find a single Tbl_ibt_product_details with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_product_details.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tbl_ibt_product_details with id=" + id
            });
        });
};

// Update a Tbl_ibt_product_details by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_product_details.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_product_details was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tbl_ibt_product_details with id=${id}. Maybe Tbl_ibt_product_details was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tbl_ibt_product_details with id=" + id
            });
        });
};

// Delete a Tbl_ibt_product_details with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tbl_ibt_product_details.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tbl_ibt_product_details was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tbl_ibt_product_details with id=${id}. Maybe Tbl_ibt_product_details was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tbl_ibt_product_details with id=" + id
            });
        });
};

// Delete all Tbl_ibt_product_details from the database.
exports.deleteAll = (req, res) => {
    Tbl_ibt_product_details.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tbl_ibt_product_details were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Tbl_ibt_product_details."
            });
        });
};
