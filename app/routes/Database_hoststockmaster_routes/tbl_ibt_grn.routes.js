module.exports = (app) => {

    const tbl_ibt_grn = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_grn.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_grn
    router.post("/", tbl_ibt_grn.create);

    // Retrieve all tbl_ibt_grns
    router.get("/", tbl_ibt_grn.findAll);

    // Retrieve a single tbl_ibt_grn with id
    router.get("/:id", tbl_ibt_grn.findOne);

    // Update a tbl_ibt_grn with id
    router.put("/:id", tbl_ibt_grn.update);

    // Delete a tbl_ibt_grn with id
    router.delete("/:id", tbl_ibt_grn.delete);

    // Delete all tbl_ibt_grns
    router.delete("/", tbl_ibt_grn.deleteAll);

    app.use("/api/tbl_ibt_grn", router);

};
