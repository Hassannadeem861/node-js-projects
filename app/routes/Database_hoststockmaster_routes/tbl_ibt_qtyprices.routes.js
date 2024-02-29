module.exports = (app) => {

    const tbl_ibt_qtyprices = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_qtyprices.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_qtyprices
    router.post("/", tbl_ibt_qtyprices.create);

    // Retrieve all tbl_ibt_qtypricess
    router.get("/", tbl_ibt_qtyprices.findAll);

    // Retrieve a single tbl_ibt_qtyprices with id
    router.get("/:id", tbl_ibt_qtyprices.findOne);

    // Update a tbl_ibt_qtyprices with id
    router.put("/:id", tbl_ibt_qtyprices.update);

    // Delete a tbl_ibt_qtyprices with id
    router.delete("/:id", tbl_ibt_qtyprices.delete);

    // Delete all tbl_ibt_qtypricess
    router.delete("/", tbl_ibt_qtyprices.deleteAll);

    app.use("/api/tbl_ibt_qtyprices", router);

};
