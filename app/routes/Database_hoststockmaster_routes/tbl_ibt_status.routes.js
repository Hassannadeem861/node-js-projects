module.exports = (app) => {

    const tbl_ibt_status = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_status.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_status
    router.post("/", tbl_ibt_status.create);

    // Retrieve all tbl_ibt_statuss
    router.get("/", tbl_ibt_status.findAll);

    // Retrieve a single tbl_ibt_status with id
    router.get("/:id", tbl_ibt_status.findOne);

    // Update a tbl_ibt_status with id
    router.put("/:id", tbl_ibt_status.update);

    // Delete a tbl_ibt_status with id
    router.delete("/:id", tbl_ibt_status.delete);

    // Delete all tbl_ibt_statuss
    router.delete("/", tbl_ibt_status.deleteAll);

    app.use("/api/tbl_ibt_status", router);

};
