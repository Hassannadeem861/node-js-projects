module.exports = (app) => {

    const tbl_ibt_grn_det = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_grn_det.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_grn_det
    router.post("/", tbl_ibt_grn_det.create);

    // Retrieve all tbl_ibt_grn_dets
    router.get("/", tbl_ibt_grn_det.findAll);

    // Retrieve a single tbl_ibt_grn_det with id
    router.get("/:id", tbl_ibt_grn_det.findOne);

    // Update a tbl_ibt_grn_det with id
    router.put("/:id", tbl_ibt_grn_det.update);

    // Delete a tbl_ibt_grn_det with id
    router.delete("/:id", tbl_ibt_grn_det.delete);

    // Delete all tbl_ibt_grn_dets
    router.delete("/", tbl_ibt_grn_det.deleteAll);

    app.use("/api/tbl_ibt_grn_det", router);

};
