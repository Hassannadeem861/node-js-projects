module.exports = (app) => {

    const tbl_ibt_product_details = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_product_details.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_product_details
    router.post("/", tbl_ibt_product_details.create);

    // Retrieve all tbl_ibt_product_detailss
    router.get("/", tbl_ibt_product_details.findAll);

    // Retrieve a single tbl_ibt_product_details with id
    router.get("/:id", tbl_ibt_product_details.findOne);

    // Update a tbl_ibt_product_details with id
    router.put("/:id", tbl_ibt_product_details.update);

    // Delete a tbl_ibt_product_details with id
    router.delete("/:id", tbl_ibt_product_details.delete);

    // Delete all tbl_ibt_product_detailss
    router.delete("/", tbl_ibt_product_details.deleteAll);

    app.use("/api/tbl_ibt_product_details", router);

};
