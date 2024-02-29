module.exports = (app) => {

    const tbl_ibt_category_sub2 = require("../../controllers/Database_hoststockmaster_controller/tbl_ibt_category_sub2.controller");
    // const { verifyToken, isAdmin } = require("../../middleware/authMiddleware");
    var router = require("express").Router();

    // Create a new tbl_ibt_category_sub2
    router.post("/", tbl_ibt_category_sub2.create);

    // Retrieve all tbl_ibt_category_sub2s
    router.get("/", tbl_ibt_category_sub2.findAll);

    // Retrieve a single tbl_ibt_category_sub2 with id
    router.get("/:id", tbl_ibt_category_sub2.findOne);

    // Update a tbl_ibt_category_sub2 with id
    router.put("/:id", tbl_ibt_category_sub2.update);

    // Delete a tbl_ibt_category_sub2 with id
    router.delete("/:id", tbl_ibt_category_sub2.delete);

    // Delete all tbl_ibt_category_sub2s
    router.delete("/", tbl_ibt_category_sub2.deleteAll);

    app.use("/api/tbl_ibt_category_sub2", router);

};
