module.exports = (app) => {

    const tbl_ibt_counter = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_counter.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_counter
    router.post("/", tbl_ibt_counter.create);

    // Retrieve all tbl_ibt_counters
    router.get("/", tbl_ibt_counter.findAll);

    // Retrieve a single tbl_ibt_counter with id
    router.get("/:id", tbl_ibt_counter.findOne);

    // Update a tbl_ibt_counter with id
    router.put("/:id", tbl_ibt_counter.update);

    // Delete a tbl_ibt_counter with id
    router.delete("/:id", tbl_ibt_counter.delete);

    // Delete all tbl_ibt_counters
    router.delete("/", tbl_ibt_counter.deleteAll);

    app.use("/api/tbl_ibt_counter", router);

};
