module.exports = (app) => {

    const tbl_ibt_qtyprices_update = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_qtyprices_update.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_qtyprices_update
    router.post("/", tbl_ibt_qtyprices_update.create);

    // Retrieve all tbl_ibt_qtyprices_updates
    router.get("/", tbl_ibt_qtyprices_update.findAll);

    // Retrieve a single tbl_ibt_qtyprices_update with id
    router.get("/:id", tbl_ibt_qtyprices_update.findOne);

    // Update a tbl_ibt_qtyprices_update with id
    router.put("/:id", tbl_ibt_qtyprices_update.update);

    // Delete a tbl_ibt_qtyprices_update with id
    router.delete("/:id", tbl_ibt_qtyprices_update.delete);

    // Delete all tbl_ibt_qtyprices_updates
    router.delete("/", tbl_ibt_qtyprices_update.deleteAll);

    app.use("/api/tbl_ibt_qtyprices_update", router);

};
