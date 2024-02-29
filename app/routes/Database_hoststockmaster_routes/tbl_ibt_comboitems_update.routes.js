module.exports = (app) => {

    const tbl_ibt_comboitems_update = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_comboitems_update.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_comboitems_update
    router.post("/", tbl_ibt_comboitems_update.create);

    // Retrieve all tbl_ibt_comboitems_updates
    router.get("/", tbl_ibt_comboitems_update.findAll);

    // Retrieve a single tbl_ibt_comboitems_update with id
    router.get("/:id", tbl_ibt_comboitems_update.findOne);

    // Update a tbl_ibt_comboitems_update with id
    router.put("/:id", tbl_ibt_comboitems_update.update);

    // Delete a tbl_ibt_comboitems_update with id
    router.delete("/:id", tbl_ibt_comboitems_update.delete);

    // Delete all tbl_ibt_comboitems_updates
    router.delete("/", tbl_ibt_comboitems_update.deleteAll);

    app.use("/api/tbl_ibt_comboitems_update", router);

};
