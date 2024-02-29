module.exports = (app) => {

    const tbl_ibt_product_details_update = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_product_details_update.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_product_details_update
    router.post("/", tbl_ibt_product_details_update.create);

    // Retrieve all tbl_ibt_product_details_updates
    router.get("/", tbl_ibt_product_details_update.findAll);

    // Retrieve a single tbl_ibt_product_details_update with id
    router.get("/:id", tbl_ibt_product_details_update.findOne);

    // Update a tbl_ibt_product_details_update with id
    router.put("/:id", tbl_ibt_product_details_update.update);

    // Delete a tbl_ibt_product_details_update with id
    router.delete("/:id", tbl_ibt_product_details_update.delete);

    // Delete all tbl_ibt_product_details_updates
    router.delete("/", tbl_ibt_product_details_update.deleteAll);

    app.use("/api/tbl_ibt_product_details_update", router);

};
