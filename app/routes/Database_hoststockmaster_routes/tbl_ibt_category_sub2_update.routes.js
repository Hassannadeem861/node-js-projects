module.exports = (app) => {

    const tbl_ibt_category_sub2_update = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_category_sub2_update.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_category_sub2_update
    router.post("/", tbl_ibt_category_sub2_update.create);

    // Retrieve all tbl_ibt_category_sub2_updates
    router.get("/", tbl_ibt_category_sub2_update.findAll);

    // Retrieve a single tbl_ibt_category_sub2_update with id
    router.get("/:id", tbl_ibt_category_sub2_update.findOne);

    // Update a tbl_ibt_category_sub2_update with id
    router.put("/:id", tbl_ibt_category_sub2_update.update);

    // Delete a tbl_ibt_category_sub2_update with id
    router.delete("/:id", tbl_ibt_category_sub2_update.delete);

    // Delete all tbl_ibt_category_sub2_updates
    router.delete("/", tbl_ibt_category_sub2_update.deleteAll);

    app.use("/api/tbl_ibt_category_sub2_update", router);

};
